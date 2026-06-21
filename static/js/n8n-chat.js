/**
 * n8n-chat.js — N8N Chat Widget para Nexus AI Agency
 * Widget de chat embebido para ejecutar Workflows de IA vía n8n
 */
(function() {
  'use strict';

  // ⚠️ IMPORTANTE: Reemplaza con tu webhook real de n8n
  const WEBHOOK_URL = 'https://n8n-production-adf2.up.railway.app/webhook/59acd426-5115-4d1b-9757-80ef5c21deb5/chat';

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
      '});'
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