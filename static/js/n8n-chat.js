/**
 * n8n-chat.js — N8N Chat Widget para Nexus AI Agency
 * Widget de chat embebido para ejecutar Workflows de IA vía n8n
 * 
 * v2.2 — Persistencia de sesión entre páginas (7 días)
 *        El sessionId se guarda en localStorage bajo la misma
 *        clave que @n8n/chat espera ('sessionId'), para que
 *        el widget cargue el historial automáticamente.
 */
(function() {
  'use strict';

  // ⚠️ Reemplaza con tu webhook real de n8n
  const WEBHOOK_URL = 'https://n8n-production-adf2.up.railway.app/webhook/59acd426-5115-4d1b-9757-80ef5c21deb5/chat';

  // Clave que @n8n/chat usa para leer/escribir el sessionId en localStorage
  // ATENCIÓN: la clave real es "n8n-chat/sessionId" (hardcodeada en la librería),
  // NO el valor de chatSessionKey (que solo nombra el campo en la API).
  const SESSION_KEY = 'n8n-chat/sessionId';
  const EXPIRY_KEY = 'nexus-chat-session-expiry';
  const EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 días

  // ─── Gestión de sesión (localStorage con expiración) ─────────
  function getOrCreateSessionId() {
    var sessionId = localStorage.getItem(SESSION_KEY);
    var expiry = localStorage.getItem(EXPIRY_KEY);

    // Si existe sesión y no ha expirado, mantenerla
    if (sessionId && expiry) {
      var age = Date.now() - parseInt(expiry, 10) + EXPIRY_MS; // tiempo restante
      if (age > 0) {
        return sessionId;
      }
    }

    // Crear nueva sesión
    var newId = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, newId);
    localStorage.setItem(EXPIRY_KEY, String(Date.now()));
    return newId;
  }

  // Exponer función global para "Nueva Conversación"
  window.resetNexusChatSession = function() {
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(EXPIRY_KEY);
    window.location.reload();
  };

  // ─── Asegurar sesión persistente ─────────────────────────────
  getOrCreateSessionId(); // Inicializa el sessionId en localStorage

  // ─── Carga CSS ──────────────────────────────────────────────
  function loadCSS() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    document.head.appendChild(link);
  }

  // ─── Inicializa Chat ────────────────────────────────────────
  function initChat() {
    if (!WEBHOOK_URL) {
      console.warn('[n8n-chat] webhookUrl vacío. El chat no se iniciará.');
      return;
    }

    var script = document.createElement('script');
    script.type = 'module';
    script.textContent = [
      "import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';",
      '',
      'createChat({',
      "  webhookUrl: '" + WEBHOOK_URL + "',",
      '  webhookConfig: {',
      "    method: 'POST',",
      '    headers: {}',
      '  },',
      "  target: '#n8n-chat',",
      "  mode: 'window',",
      "  chatInputKey: 'chatInput',",
      "  chatSessionKey: 'sessionId',",
      '  loadPreviousSession: true,',
      '  metadata: {},',
      '  showWelcomeScreen: false,',
      "  defaultLanguage: 'en',",
      '  initialMessages: [',
      "    '¡Hola! 👋',",
      "    'Soy el asistente virtual de Nexus AI. ¿En qué puedo ayudarte?'",
      '  ],',
      '  i18n: {',
      '    es: {',
      "      title: '¡Hola! 👋',",
      "      subtitle: 'Asistente IA de Nexus AI. Estamos aquí para ayudarte 24/7.',",
      "      footer: '',",
      "      getStarted: 'Nueva Conversación',",
      "      inputPlaceholder: 'Escribe tu mensaje...',",
      '    },',
      '  },',
      "  defaultLanguage: 'es',",
      '  enableStreaming: false,',
      '});',
      '',
      '// ─── Cargar historial de sesión previa ──────────────────',
      'setTimeout(() => {',
      '  const _el = document.querySelector("#n8n-chat");',
      '  if (_el && _el.__vue_app__) {',
      '    const $chat = _el.__vue_app__.config.globalProperties.$chat;',
      '    if ($chat?.loadPreviousSession) $chat.loadPreviousSession();',
      '  }',
      '}, 800);'
    ].join('\n');
    document.body.appendChild(script);
  }

  // ─── Inicio ──────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      loadCSS();
      initChat();
    });
  } else {
    loadCSS();
    initChat();
  }
})();