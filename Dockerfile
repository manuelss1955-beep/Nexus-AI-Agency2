# ============================================================
# Dockerfile — Nexus AI Agency (Hugo)
# Multi-stage: Alpine + Hugo binary build → nginx
# ============================================================

# ─── Stage 1: Build ──────────────────────────────────────────
FROM alpine:3.21 AS builder

ARG HUGO_VERSION=0.147.2

RUN apk add --no-cache wget tar && \
    wget -qO /tmp/hugo.tar.gz https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz && \
    cd /tmp && tar xzf hugo.tar.gz && \
    mv hugo /usr/local/bin/hugo && \
    rm hugo.tar.gz LICENSE README.md 2>/dev/null; \
    hugo version

WORKDIR /src
COPY . .

RUN hugo --minify

# ─── Stage 2: Serve con Nginx ────────────────────────────────
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