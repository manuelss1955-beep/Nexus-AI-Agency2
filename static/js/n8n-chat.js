/**
 * n8n-chat.js — N8N Chat Widget para Nexus AI Agency
 * 
 * v3.0 — Formulario pre-chat (nombre, teléfono, email)
 *        Se muestra al abrir el widget si el usuario no ha
 *        rellenado sus datos. Solo tras enviarlos aparece el chat.
 */
(function() {
  'use strict';

  const WEBHOOK_URL = 'https://n8n-production-adf2.up.railway.app/webhook/2d39cc9d-95f1-4e6e-b840-d4bfa55b74dd/chat';

  // Claves localStorage
  const SESSION_KEY = 'n8n-chat/sessionId';
  const EXPIRY_KEY = 'nexus-chat-session-expiry';
  const USER_KEY = 'nexus-chat-user-data';
  const EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 días

  // ─── Gestión de sesión ──────────────────────────────────────
  function getOrCreateSessionId() {
    var sid = localStorage.getItem(SESSION_KEY);
    var exp = localStorage.getItem(EXPIRY_KEY);
    if (sid && exp) {
      var remaining = Date.now() - parseInt(exp, 10) + EXPIRY_MS;
      if (remaining > 0) return sid;
    }
    var newId = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, newId);
    localStorage.setItem(EXPIRY_KEY, String(Date.now()));
    return newId;
  }

  getOrCreateSessionId();

  // ─── Saber si el usuario ya rellenó el formulario ──────────
  function hasUserData() {
    return !!localStorage.getItem(USER_KEY);
  }

  // ─── Inyectar CSS del formulario ────────────────────────────
  function injectFormStyles() {
    var style = document.createElement('style');
    style.textContent = `
#n8n-chat-form-overlay {
  position: absolute; inset: 0; z-index: 9999;
  background: #fff; border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  padding: 24px; box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}
#n8n-chat-form-overlay .nfo-inner {
  width: 100%; max-width: 320px;
}
#n8n-chat-form-overlay h3 {
  font-size: 1.2rem; font-weight: 700; margin: 0 0 4px;
  color: #111827;
}
#n8n-chat-form-overlay p {
  font-size: 0.85rem; color: #6B7280; margin: 0 0 20px;
  line-height: 1.5;
}
#n8n-chat-form-overlay .nfo-field {
  margin-bottom: 12px;
}
#n8n-chat-form-overlay input {
  width: 100%; padding: 10px 14px; border: 1px solid #D1D5DB;
  border-radius: 8px; font-size: 0.9rem; font-family: inherit;
  outline: none; box-sizing: border-box;
  transition: border-color 0.2s;
}
#n8n-chat-form-overlay input:focus {
  border-color: #2563EB; box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
}
#n8n-chat-form-overlay .nfo-btn {
  width: 100%; padding: 12px; background: #2563EB; color: #fff;
  border: none; border-radius: 8px; font-size: 0.95rem;
  font-weight: 600; font-family: inherit; cursor: pointer;
  margin-top: 8px; transition: background 0.2s;
}
#n8n-chat-form-overlay .nfo-btn:hover {
  background: #1D4ED8;
}
#n8n-chat-form-overlay .nfo-btn:disabled {
  opacity: 0.6; cursor: not-allowed;
}
`;
    document.head.appendChild(style);
  }

  // ─── Crear overlay del formulario ────────────────────────────
  function createFormOverlay() {
    var overlay = document.createElement('div');
    overlay.id = 'n8n-chat-form-overlay';
    overlay.innerHTML =
      '<div class="nfo-inner">' +
        '<h3>Antes de empezar 💬</h3>' +
        '<p>Déjanos tus datos para atenderte mejor</p>' +
        '<form id="nfo-form">' +
          '<div class="nfo-field"><input type="text" id="nfo-name" placeholder="Nombre *" required></div>' +
          '<div class="nfo-field"><input type="tel" id="nfo-phone" placeholder="Teléfono *" required></div>' +
          '<div class="nfo-field"><input type="email" id="nfo-email" placeholder="Email *" required></div>' +
          '<button type="submit" class="nfo-btn" id="nfo-submit">Comenzar Chat →</button>' +
        '</form>' +
      '</div>';

    var target = document.getElementById('n8n-chat');
    if (!target) return;
    target.appendChild(overlay);

    document.getElementById('nfo-form').addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = document.getElementById('nfo-submit');
      btn.disabled = true; btn.textContent = 'Enviando...';

      var data = {
        name: document.getElementById('nfo-name').value.trim(),
        phone: document.getElementById('nfo-phone').value.trim(),
        email: document.getElementById('nfo-email').value.trim(),
        timestamp: Date.now()
      };
      localStorage.setItem(USER_KEY, JSON.stringify(data));

      // Enviar a n8n (fire-and-forget)
      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'preChatForm',
          sessionId: getOrCreateSessionId(),
          name: data.name,
          phone: data.phone,
          email: data.email
        })
      }).catch(function(){});

      overlay.remove();
    });
  }

  // ─── Observer: detectar cuándo se abre la ventana del chat ──
  function setupFormObserver() {
    if (hasUserData()) return; // Ya tiene datos, no hace falta

    var target = document.getElementById('n8n-chat');
    if (!target) return;

    var observer = new MutationObserver(function() {
      // Detectar si la ventana del chat está visible
      var chatWindow = target.querySelector('.n8n-chat-window');
      var toggle = target.querySelector('.n8n-chat-toggle');
      if (chatWindow && chatWindow.style.display !== 'none') {
        // La ventana se abrió → mostrar formulario
        if (!document.getElementById('n8n-chat-form-overlay')) {
          createFormOverlay();
        }
        observer.disconnect();
      }
    });
    observer.observe(target, { childList: true, subtree: true, attributes: true });
  }

  // ─── Carga CSS del widget ────────────────────────────────────
  function loadCSS() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    document.head.appendChild(link);
    injectFormStyles();
  }

  // ─── Inicializa Chat ────────────────────────────────────────
  function initChat() {
    if (!WEBHOOK_URL) return;

    var script = document.createElement('script');
    script.type = 'module';
    script.textContent = [
      "import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';",
      '',
      'createChat({',
      "  webhookUrl: '" + WEBHOOK_URL + "',",
      '  webhookConfig: { method: "POST", headers: {} },',
      "  target: '#n8n-chat',",
      "  mode: 'window',",
      "  chatInputKey: 'chatInput',",
      "  chatSessionKey: 'sessionId',",
      '  loadPreviousSession: true,',
      '  metadata: {},',
      '  showWelcomeScreen: false,',
      "  defaultLanguage: 'en',",
      '  initialMessages: [',
      "    '¡Bienvenido! 👋',",
      "    'Soy el asistente virtual de Nexus AI. ¿En qué puedo ayudarte?'",
      '  ],',
      '  i18n: {',
      '    es: {',
      "      title: 'Nexus AI',",
      "      subtitle: 'Asistente IA — Respondemos en menos de 24h',",
      "      footer: '',",
      "      getStarted: 'Nueva Conversación',",
      "      inputPlaceholder: 'Escribe tu mensaje...',",
      '    },',
      '  },',
      "  defaultLanguage: 'es',",
      '  enableStreaming: false,',
      '});',
      '',
      // Pequeño retardo para que Vue monte el DOM
      'setTimeout(() => {',
      '  if (window._nexusChatReady) window._nexusChatReady();',
      '}, 300);'
    ].join('\n');
    document.body.appendChild(script);
  }

  // ─── Hook post-montaje ──────────────────────────────────────
  window._nexusChatReady = function() {
    setupFormObserver();
    // También comprobar si el chat ya está abierto (ej. desde otra interacción)
    var target = document.getElementById('n8n-chat');
    if (target) {
      var win = target.querySelector('.n8n-chat-window');
      if (win && win.style.display !== 'none' && !hasUserData()) {
        if (!document.getElementById('n8n-chat-form-overlay')) {
          createFormOverlay();
        }
      }
    }
  };

  // ─── Reset de sesión (expuesto globalmente) ─────────────────
  window.resetNexusChatSession = function() {
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(EXPIRY_KEY);
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  };

  // ─── Inicio ──────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { loadCSS(); initChat(); });
  } else {
    loadCSS(); initChat();
  }
})();