# ============================================================
# Dockerfile — Nexus AI Agency (Hugo)
# Multi-stage: Alpine + Hugo binary → nginx
# ============================================================

# ─── Stage 1: Build ──────────────────────────────────────────
FROM alpine:3.21 AS builder

ARG HUGO_VERSION=0.163.3

RUN apk add --no-cache curl tar && \
    echo "Step 1: Download Hugo v${HUGO_VERSION}..." && \
    curl -fL -o /tmp/hugo.tar.gz \
      https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz && \
    echo "Step 2: Extract..." && \
    tar -xzf /tmp/hugo.tar.gz -C /tmp/ && \
    echo "Step 3: Binary at /tmp/hugo:" && \
    ls -la /tmp/hugo && \
    file /tmp/hugo && \
    echo "Step 4: Install to /usr/local/bin..." && \
    install -m 755 /tmp/hugo /usr/local/bin/hugo && \
    echo "Step 5: Verify:" && \
    ls -la /usr/local/bin/hugo && \
    file /usr/local/bin/hugo && \
    echo "Step 6: Cleanup..." && \
    rm -f /tmp/hugo.tar.gz /tmp/LICENSE /tmp/README.md && \
    echo "Step 7: Test Hugo:" && \
    /usr/local/bin/hugo version

WORKDIR /src
COPY . .

RUN /usr/local/bin/hugo --minify

# ─── Stage 2: Serve ──────────────────────────────────────────
FROM nginx:1.27-alpine

LABEL maintainer="Nexus AI Agency <hola@nexus-ai.agency>"
LABEL description="Nexus AI Agency — Sitio web corporativo generado con Hugo"

COPY --from=builder /src/public /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY <<'NGINX_EOF' /etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;
    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
    gzip_min_length 256;
    location / { try_files $uri $uri/ =404; }
    location ~* \.(css|js|svg|png|jpg|jpeg|gif|ico|woff2?)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}
NGINX_EOF

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -qO- http://localhost/ || exit 1