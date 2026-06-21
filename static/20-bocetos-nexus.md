# 20 Bocetos de Mejora — Nexus AI Agency

> Basado en el análisis del sitio: https://nexus-ai-agency2-production.up.railway.app/
> Fecha: 2026

---

## Boceto 1 — Hero Principal
**Página:** Home
**Sección:** Hero / Above the Fold

### Descripción visual
Layout full-viewport con fondo degradado animado en tonos **#0A0E1A** (negro espacial) → **#1A1040** (púrpura profundo). Sobreimpreso, un patrón de grid sutil con líneas de color **#2D1B69** (opacidad 15%) que simula una red neuronal.

En el centro, alineado a la izquierda (en desktop), título principal en **Clash Display Bold, 64px**, color blanco **#FFFFFF** con un gradiente en la palabra "IA" usando **#7C3AED** → **#3B82F6**. Subtítulo en **Inter Regular, 20px**, color **#A0AEC0**.

Dos CTA buttons: primario en **#7C3AED** con hover que ilumina a **#8B5CF6** (sombra glow 0 0 20px rgba(124,58,237,0.5)), y secundario outline con borde **#2D3748**.

A la derecha, una ilustración 3D de un cubo de vidrio neon con partículas flotantes animadas (efecto "neural core"). Un badge flotante que dice "+150 proyectos entregados" con fondo glassmorphism (**rgba(255,255,255,0.05)**, backdrop-blur 12px).

### Mockup ASCII
```
┌──────────────────────────────────────────────────────┐
│ [Logo]    Menú                    [Consultoría →]    │
│                                                       │
│                                                       │
│   Tu partner de IA          ╭──────────────╮          │
│   sin complicaciones        │   ✦  ═══  ✦   │          │
│                             │  ╱ ████ ╲    │          │
│   Automatiza tu negocio     │ │ ✦ ═══ ✦ │   │          │
│   con agentes IA que        │  ╲ ████ ╱    │          │
│   trabajan 24/7             │   ✦  ═══  ✦   │          │
│                             ╰──────────────╯          │
│   [🚀 Consultoría Gratuita]  [Ver Servicios →]        │
│                                                       │
│   ┌─ Confianza ──────────────────────┐                │
│   │ ⭐ 4.9/5  |  +150 proyectos  |  8 países │        │
│   └───────────────────────────────────┘                │
└──────────────────────────────────────────────────────┘
```

---

## Boceto 2 — Grid de Servicios (9 cards)
**Página:** Home
**Sección:** Servicios

### Descripción visual
Sección con fondo **#0F1525**. Título "Nuestros Servicios" en blanco 42px Clash Display. Subtítulo "9 soluciones de IA para transformar tu empresa" en Inter 18px #A0AEC0.

Grid de 3×3 tarjetas con fondo **#1A1F35** (border-radius 16px), borde **#2D3748** que cambia a **#7C3AED** en hover con glow externo. Sombra: 0 8px 32px rgba(0,0,0,0.3). Padding interno 28px.

Cada card tiene:
- Icono grande (48px) con fondo circular **rgba(124,58,237,0.1)** y color **#7C3AED**
- Título en Inter SemiBold 18px #FFFFFF
- Descripción corta en Inter 14px #A0AEC0
- Flecha "→" que se desliza 8px a la derecha en hover
- Efecto de borde animado: gradiente que recorre el perímetro en hover

En hover, la card se eleva 4px (transform: translateY(-4px)) con transición de 0.3s ease.

### Mockup ASCII
```
┌──────────────────────────────────────────────────────────┐
│  Nuestros Servicios                                      │
│  9 soluciones de IA para transformar tu empresa          │
│                                                          │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                 │
│  │📋 Digita │ │🤖 Agentes│ │🤝 Atención│                 │
│  │lización  │ │IA Autón. │ │Presencial│                 │
│  │          │ │          │ │          │                 │
│  │ Digitaliza│ │Agentes   │ │Kioscos IA│                 │
│  │ tu empresa│ │inteligent│ │físicos   │                 │
│  │ Descubrir→│ │Descubrir→│ │Descubrir→│                 │
│  └──────────┘ └──────────┘ └──────────┘                 │
│                                                          │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                 │
│  │📞 Agentes│ │💬 Chatbo │ │💻 Desarro│                 │
│  │Telefónic │ │ts        │ │llo Soft. │                 │
│  │          │ │          │ │          │                 │
│  │Llamadas  │ │Chatbots  │ │Apps a    │                 │
│  │IA con voz│ │inteligent│ │medida    │                 │
│  │Descubrir→│ │Descubrir→│ │Descubrir→│                 │
│  └──────────┘ └──────────┘ └──────────┘                 │
│                                                          │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                 │
│  │⚡ Automa │ │🔌 Integra│ │🎯 Consult│                 │
│  │tización  │ │ciones MCP│ │oría IA   │                 │
│  │          │ │          │ │          │                 │
│  │Procesos  │ │Conecta   │ │Estrategia│                 │
│  │automátic │ │cualquier │ │IA a medi│                 │
│  │Descubrir→│ │Descubrir→│ │Descubrir→│                 │
│  └──────────┘ └──────────┘ └──────────┘                 │
└──────────────────────────────────────────────────────────┘
```

---

## Boceto 3 — Stats / Contadores
**Página:** Home
**Sección:** Métricas

### Descripción visual
Sección con fondo oscuro **#0A0E1A** y un sutil patrón de puntos (dot-grid) en **rgba(124,58,237,0.05)**. Layout horizontal de 4 columnas.

Cada stat tiene:
- Número grande (56px) en **Clash Display Bold** con gradiente **#7C3AED → #3B82F6**
- Etiqueta debajo en Inter Medium 14px #A0AEC0
- Un pequeño indicador decorativo: línea horizontal de 40px de ancho en **#7C3AED** con opacidad 0.4

Los números tienen un contador animado (count-up) que sube desde 0 al valor real al hacer scroll. Separadores verticales sutiles entre columnas (1px, **#2D3748**).

### Mockup ASCII
```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│     [97%]           [24/7]          [150+]          [40+]   │
│   Precisión del   Soporte 24/7   Proyectos       Clientes  │
│   Modelo         con ing. reales Entregados      Activos   │
│   ─────           ─────           ─────           ─────    │
│   Validado en    Sin tiempos     En 12           En 8      │
│   producción     muertos         industrias      países    │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## Boceto 4 — Casos de Éxito (Portfolio Preview)
**Página:** Home
**Sección:** Casos de Éxito

### Descripción visual
Sección con fondo **#0F1525**. Título "Casos de Éxito" con un badge "✨" decorativo. Subtítulo "Resultados que hablan por sí solos".

Tres tarjetas horizontales (layout de 3 columnas en desktop) con fondo **#1A1F35**, border-radius 16px y un borde izquierdo de 4px de color variable por categoría:
- Automatización: #3B82F6 (azul)
- Chatbots: #10B981 (verde)
- Agentes IA: #F59E0B (ámbar)

Cada card contiene: icono grande arriba, nombre del caso, descripción breve, y un "KPI destacado" en formato grande con badge de porcentaje. Fondo de la card con efecto glass sutil.

Botón "Ver todos los casos →" centrado abajo con estilo primary.

### Mockup ASCII
```
┌──────────────────────────────────────────────────────────────┐
│  ✨ Casos de Éxito                                           │
│  Resultados que hablan por sí solos                          │
│                                                              │
│  ┌───── Azul ─────┐ ┌───── Verde ────┐ ┌───── Ámbar ────┐  │
│  │ 🏭              │ │ 🏦              │ │ 📦              │  │
│  │ Automatización  │ │ Chatbots       │ │ Agentes IA     │  │
│  │                 │ │                 │ │                 │  │
│  │ Planta reduce   │ │ Banco reduce   │ │ Ecommerce      │  │
│  │ errores 94%     │ │ tickets 67%    │ │ escala 3x      │  │
│  │                 │ │                 │ │                 │  │
│  │ 📊 -94% errores │ │ 📊 -67% soporte│ │ 📊 3x escalado │  │
│  │ 🚀 +40% veloz   │ │ 🎯 92% resol. │ │ 💰 -45% costes │  │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘  │
│                                                              │
│           [🔍 Ver todos los casos de éxito →]                 │
└──────────────────────────────────────────────────────────────┘
```

---

## Boceto 5 — Testimonios / Carrusel
**Página:** Home
**Sección:** Testimonios

### Descripción visual
Sección con fondo **#0A0E1A** y un sutil gradiente radial desde el centro **rgba(124,58,237,0.08)**.

Carrusel centrado con una tarjeta principal visible y ligeras muestras de las anteriores/siguientes (efecto "coverflow"). La tarjeta activa tiene:
- Fondo **#1A1F35** con border-radius 20px
- Borde **#2D3748** con glow **#7C3AED** en la activa
- Avatar circular (64px) con borde gradiente
- Nombre y cargo en Inter 16px/14px
- Cita/Testimonial en Inter italic 18px #E2E8F0
- Rating de 5 estrellas en ámbar #F59E0B

Debajo, dots de navegación (círculos de 8px, activo en **#7C3AED** de 12px, inactivos en **#4A5568**). Flechas de navegación laterales con fondo circular **rgba(124,58,237,0.1)**.

Animación: slide suave con fade, duración 0.5s.

### Mockup ASCII
```
┌────────────────────────────────────────────────────────────┐
│                    ╭─────────────────────╮                  │
│   ┌──┐             │  "Los agentes de    │             ┌──┐│
│   │◄ │  ┌──┐       │   Nexus AI trans-   │       ┌──┐ │► ││
│   └──┘  │  │       │   formaron nuestra  │       │  │ └──┘│
│         └──┘       │   atención al       │       └──┘     │
│                    │   cliente. -67%     │                  │
│                    │   de tickets."      │                  │
│                    │                     │                  │
│                    │  ⭐⭐⭐⭐⭐           │                  │
│                    │  [🟣] María López   │                  │
│                    │  CEO, TechCorp      │                  │
│                    ╰─────────────────────╯                  │
│                      ● ● ● ● ●                              │
└────────────────────────────────────────────────────────────┘
```

---

## Boceto 6 — Newsletter / Lead Magnet
**Página:** Home
**Sección:** Newsletter / Captación

### Descripción visual
Sección antes del footer con fondo **#0F1525** y un sutil patrón de ondas (wave SVG) en **rgba(124,58,237,0.08)** en la parte superior.

Contenedor central con fondo **#1A1F35**, border-radius 24px, borde **#2D3748**. Padding: 60px. Layout en dos columnas:

**Izquierda (60%):**
- Icono grande de sobre/carta con IA (💌 o 3D)
- Título "📬 Recibe contenido exclusivo sobre IA" en 32px Clash Display
- Texto "Guías, casos de éxito y novedades en tu bandeja de entrada" en Inter 16px #A0AEC0
- Input field: fondo **#0F1525**, borde **#2D3748**, border-radius 12px, placeholder gris, con botón "Suscribirme" integrado a la derecha con fondo **#7C3AED**
- Checkbox de privacidad con texto pequeño

**Derecha (40%):**
- Mockup 3D de un email/celular mostrando un lead magnet "Guía IA 2026"

Animación del input: glow en focus con **#7C3AED** y sombra 0 0 0 3px rgba(124,58,237,0.2).

### Mockup ASCII
```
┌──────────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────────────┐    │
│  │  📬 Recibe contenido exclusivo sobre IA           │    │
│  │  Guías, casos de éxito y novedades.              │    │
│  │                                                   │    │
│  │  ┌──────────────────────────┐ ┌─────────────┐    │    │
│  │  │  tu@email.com            │ │ Suscribirme  │    │    │
│  │  └──────────────────────────┘ └─────────────┘    │    │
│  │  ☐ He leído y acepto la política de privacidad   │    │
│  │                                                   │    │
│  │  Sin spam. Solo contenido de valor.              │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  ─── ¡Descarga gratis nuestra Guía IA 2026! ───         │
└──────────────────────────────────────────────────────────┘
```---

## Boceto 7 — Hero de Página (Servicios)
**Página:** Servicios
**Sección:** Hero / Cabecera

### Descripción visual
Fondo degradado **#0A0E1A** → **#1A1040** con un patrón grid que simula nodos de red (hexágonos) en gris tenue **rgba(255,255,255,0.03)**. Altura: 400px.

Título "Servicios 360°" en **Clash Display Bold, 48px** blanco con el "360°" en **#7C3AED**. Subtítulo "Soluciones completas de IA para cada necesidad empresarial" en Inter 18px #A0AEC0.

Breadcrumb: Inicio > Servicios, en Inter 14px #A0AEC0, con el último elemento en blanco.

Un menú de tabs/pestañas horizontal con los filtros de categoría (Servicios 360, Servicios, Soluciones, Sectores, Formación) con estilo pill-shape. El activo tiene fondo **#7C3AED** e inactivos con fondo **rgba(255,255,255,0.05)** y borde **#2D3748**.

### Mockup ASCII
```
┌──────────────────────────────────────────────────────────────┐
│  [Logo]    Menú                    [Consultoría →]           │
│                                                              │
│  Inicio > Servicios                                           │
│                                                              │
│        Servicios 360°                                        │
│   Soluciones completas de IA para cada necesidad             │
│                                                              │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐    │
│  │🔄 360° │ │🚀 Serv │ │💡 Soluc│ │🏢 Sect │ │📚 Form │    │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘    │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Boceto 8 — Detalle del Servicio (con Sidebar)
**Página:** Servicios
**Sección:** Página individual de servicio (ej: Agentes IA Autónomos)

### Descripción visual
Layout de dos columnas: **Main (70%)** + **Sidebar (30%)** con gap de 40px.

**Main:**
- Breadcrumb: Inicio > Servicios > Agentes IA Autónomos
- Título grande 42px Clash Display
- Párrafo introductorio en Inter 18px #E2E8F0 con lead
- Separador decorativo (línea gradiente **#7C3AED → transparente**, 80px)
- Secciones con H3 en 24px Clash Display, bullet points con iconos, listas de beneficios
- Citas destacadas con fondo **#1A1F35**, border-left 4px **#7C3AED**, italic

**Sidebar (sticky):**
- Card "Solicitar información" con fondo **#1A1F35**, border-radius 16px, padding 24px
- Formulario corto: nombre, email, teléfono
- Botón CTA "Solicitar ahora" full-width **#7C3AED**
- Badge "Respuesta en < 24h"
- Separador delgado
- Card secundaria con stats rápidas del servicio

### Mockup ASCII
```
┌──────────────────────────────────────────────────────────────┐
│  Inicio > Servicios > Agentes IA Autónomos                   │
│                                                              │
│  ┌───────────────────────────┐ ┌──────────────────┐          │
│  │ Agentes IA que trabajan   │ │ 📋 Solicitar info│          │
│  │ por ti de forma autónoma  │ │                  │          │
│  │                           │ │ Nombre: [    ]   │          │
│  │ Lorem ipsum dolor sit     │ │ Email:  [    ]   │          │
│  │ amet consectetur...       │ │ Tel:    [    ]   │          │
│  │                           │ │                  │          │
│  │ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─   │ │ [Solicitar ahora]│          │
│  │                           │ │ ⚡ Resp. < 24h   │          │
│  │ Beneficios:               │ ├──────────────────┤          │
│  │ ✓ Autonomía real          │ │ 📊 Métricas      │          │
│  │ ✓ 24/7/365                │ │ 97% Precisión    │          │
│  │ ✓ Ejecución multicapa     │ │ 60% Reducción    │          │
│  │ ✓ Integración MCP         │ │ 2-4 semanas      │          │
│  │                           │ └──────────────────┘          │
│  │ "Testimonio destacado..." │                               │
│  └───────────────────────────┘                               │
└──────────────────────────────────────────────────────────────┘
```

---

## Boceto 9 — Pricing / Tabla Comparativa
**Página:** Servicios
**Sección:** Pricing / Planes

### Descripción visual
Fondo **#0F1525**. Título "Planes y Precios" en Clash Display 36px. Subtítulo "Soluciones adaptadas a tu negocio".

Tres columnas de pricing en cards con fondo **#1A1F35**, border-radius 20px, padding 32px. La card del medio (Recomendado) es ligeramente más grande y tiene un badge "⭐ Más Popular" arriba y borde **#7C3AED** con glow.

Cada card contiene:
- Nombre del plan (Básico / Pro / Enterprise) en 22px
- Precio grande: "€2.500" / "€7.500" / "Personalizado" en 48px Clash Display
- Período "/ proyecto" o "/ año"
- Lista de features con checkmarks (✓) en **#10B981**
- Botón CTA: outline para los laterales, primary **#7C3AED** para el central
- Feature destacada con icono ⚡

Efecto hover: elevación suave (translateY(-6px)), sombra incrementada.

### Mockup ASCII
```
┌──────────────────────────────────────────────────────────────────┐
│                      Planes y Precios                            │
│         Soluciones adaptadas a tu negocio                        │
│                                                                  │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐                │
│  │    BÁSICO    │ │⭐ MÁS POPU│ │  ENTERPRISE │                │
│  │             │ │    PRO      │ │             │                │
│  │   €2.500    │ │   €7.500    │ │Personalizado │                │
│  │ / proyecto   │ │  / proyecto │ │              │                │
│  │             │ │             │ │             │                │
│  │ ✓ Chatbot   │ │ ✓ Agente IA │ │ ✓ Equipo    │                │
│  │ ✓ 1 canal   │ │ ✓ 3 canales│ │ ✓ Ilimitado │                │
│  │ ✓ Email     │ │ ✓ Telefono  │ │ ✓ Todo MCP  │                │
│  │ ✓ 1 mes sop │ │ ✓ 3 meses   │ │ ✓ 24/7 sop. │                │
│  │             │ │ ⚡ Formación │ │ ✓ SLA 99.9% │                │
│  │             │ │   incluida   │ │             │                │
│  │             │ │             │ │             │                │
│  │ [Elegir →]  │ │[Elegir →]   │ │[Contactar →]│                │
│  └─────────────┘ └─────────────┘ └─────────────┘                │
└──────────────────────────────────────────────────────────────────┘
```

---

## Boceto 10 — Sección de Equipo (About)
**Página:** About
**Sección:** Nuestro Equipo

### Descripción visual
Fondo **#0A0E1A**. Título "Conoce al equipo" con un sutil glow. Subtítulo "Expertos en IA trabajando para ti".

Grid de 3 columnas con tarjetas de persona. Cada tarjeta:
- Fondo **#1A1F35**, border-radius 20px, padding 0 (la foto arriba ocupa el ancho)
- Foto de perfil circular grande (100px) centrada, con borde de 4px gradiente **#7C3AED → #3B82F6**, superpuesta sobre un rectángulo de color sólido
- Nombre en Inter SemiBold 20px
- Cargo en Inter 14px #A0AEC0
- Descripción breve (2 líneas)
- Iconos de redes sociales (LinkedIn, Twitter, web) en círculos de 32px con fondo **rgba(124,58,237,0.1)**

En hover: la foto escala ligeramente (1.05), y aparece un overlay sutil con el logo de Nexus.

### Mockup ASCII
```
┌────────────────────────────────────────────────────────────┐
│              Conoce al equipo                              │
│         Expertos en IA trabajando para ti                  │
│                                                            │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐       │
│  │   ╭──────╮   │ │   ╭──────╮   │ │   ╭──────╮   │       │
│  │   │  🧑  │   │ │   │  👩  │   │ │   │  🧑  │   │       │
│  │   ╰──────╯   │ │   ╰──────╯   │ │   ╰──────╯   │       │
│  │              │ │              │ │              │       │
│  │ Manuel Sánchez│ │ Laura García │ │ Carlos       │       │
│  │ CEO & Fundador│ │ CTO          │ │ Mendoza      │       │
│  │              │ │              │ │ Head of Prod │       │
│  │ Ingeniero en │ │ Doctora en   │ │ Product mgr  │       │
│  │ IA, ex-Google│ │ IA, 10+ años │ │ SaaS, UX     │       │
│  │              │ │              │ │              │       │
│  │ [in] [𝕏] [w]│ │ [in] [𝕏] [w]│ │ [in] [𝕏] [w]│       │
│  └──────────────┘ └──────────────┘ └──────────────┘       │
└────────────────────────────────────────────────────────────┘
```

---

## Boceto 11 — Timeline / Trayectoria
**Página:** About
**Sección:** Nuestra trayectoria

### Descripción visual
Fondo **#0F1525**. Título "Nuestra Trayectoria" en 36px.

Timeline vertical con una línea central (2px, gradiente **#7C3AED → #3B82F6**). A los lados, nodos alternados (izquierda-derecha). Cada nodo:
- Círculo de 16px en **#7C3AED** con centro blanco, glow de 8px
- Año en badge pill **#7C3AED** con texto blanco, 14px bold
- Card con fondo **#1A1F35**, border-radius 12px, padding 20px, borde izquierdo 3px **#7C3AED**
- Título del hito en 18px Inter SemiBold
- Descripción en 14px #A0AEC0
- Flecha decorativa desde el círculo a la card

Animación: los elementos aparecen con fade-in desde abajo al hacer scroll (intersection observer), cada uno con delay progresivo.

### Mockup ASCII
```
┌──────────────────────────────────────────────────────────────┐
│                 Nuestra Trayectoria                          │
│                                                              │
│    2023                         2024                         │
│  ┌──────────┐                  ┌──────────┐                  │
│  │● Fundación │                │● Plataf.  │                 │
│  │ Nexus AI  │                │  Agentes  │                 │
│  │ por equipo│                │  MCP + 50 │                 │
│  │ de ing.   │                │  proyectos │                 │
│  └──────────┘                  └──────────┘                  │
│         │                           │                        │
│  ───────●───────────────────────────●────────────           │
│         │                           │                        │
│    2025                         2026                         │
│  ┌──────────┐                  ┌──────────┐                  │
│  │● 150+     │                 │● 40+ client│                │
│  │ proyectos │                 │   activos  │                │
│  │ 8 países  │                 │  20+ prof. │                │
│  │ Partner   │                 │  Referente │                │
│  │ tecnológico│                │  España+LAT│                │
│  └──────────┘                  └──────────┘                  │
└──────────────────────────────────────────────────────────────┘
```

---

## Boceto 12 — Stats Globales + Mapa
**Página:** About
**Sección:** Presencia global

### Descripción visual
Fondo **#0A0E1A** con un mapa mundial estilizado en SVG (solo contornos de continentes) en **rgba(124,58,237,0.06)** ocupando el fondo completo.

Cuatro KPIs grandes en una fila horizontal sobre el mapa:
- "+150 Proyectos"
- "8 Países"
- "12 Industrias"
- "40+ Clientes"

Cada KPI con número grande (56px) gradiente y texto debajo.

Puntos de calor (dots) sobre el mapa en ubicaciones: Madrid (españita), Ciudad de México, Bogotá, Buenos Aires, con un círculo pulsante animado (keyframe pulse) en **#7C3AED**.

### Mockup ASCII
```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│        🌍 Presencia Global                                   │
│                                                              │
│   ╔══════════════════════════════════════════════╗           │
│   ║              ~ ~ ~ MAPA ~ ~ ~               ║           │
│   ║        ···   ··    ··     ··   ···          ║           │
│   ║      ··   ✦(Mad)   ··   ✦(CDMX)  ··        ║           │
│   ║    ··      ··          ··        ··         ║           │
│   ║       ✦(Bog)    ✦(BSAS)    ··              ║           │
│   ║              ~ ~ ~ ~ ~ ~ ~                   ║           │
│   ╚══════════════════════════════════════════════╝           │
│                                                              │
│   +150          8            12          40+                 │
│  Proyectos    Países     Industrias   Clientes              │
│                                                              │
│  ───          ───         ───         ───                   │
│  España, LATAM  |  12 sectores  |  Activos                  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```---

## Boceto 13 — Listado de Artículos (Grid Magazine)
**Página:** Blog
**Sección:** Grid de artículos

### Descripción visual
Fondo **#0F1525**. Título "Blog" en Clash Display 42px. Subtítulo "Artículos sobre IA, automatización y transformación digital".

Layout de grid tipo magazine: una card principal grande (2 columnas de ancho) en la primera fila, luego 3 columnas abajo.

**Card principal (featured):**
- Imagen grande 16:9 (con overlay gradiente **#0A0E1A → transparente** de abajo arriba)
- Categoría badge en **#7C3AED** (pill, 12px)
- Título en 28px Clash Display
- Extracto, fecha, tiempo de lectura

**Cards secundarias (3 columnas):**
- Imagen horizontal con overlay sutil
- Badge de categoría
- Título 18px, extracto 2 líneas, fecha

Efecto hover: la imagen escala 1.03 con transición 0.4s ease, y aparece una sombra más profunda.

### Mockup ASCII
```
┌──────────────────────────────────────────────────────────────┐
│                         Blog                                 │
│  Artículos sobre IA, automatización y transformación digital  │
│                                                              │
│  ┌─────────────────────────────────────┐                     │
│  │  [IMAGEN DESTACADA - 16:9]         │                     │
│  │                                     │                     │
│  │         🟣 Guía Completa            │                     │
│  │   Guía completa de adopción de     │                     │
│  │   IA para empresas en 2026         │                     │
│  │   18 Jun 2026 · 1 min lectura      │                     │
│  └─────────────────────────────────────┘                     │
│                                                              │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐               │
│  │ [IMG]      │ │ [IMG]      │ │ [IMG]      │               │
│  │ Atención   │ │ Casos      │ │ Automatiz. │               │
│  │ al cliente │ │ prácticos  │ │ empresarial│               │
│  │ con IA     │ │ digitaliz. │ │ con agentes│               │
│  │ 15 Jun     │ │ 12 Jun     │ │ 10 Jun     │               │
│  └────────────┘ └────────────┘ └────────────┘               │
│                                                              │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐               │
│  │ [IMG]      │ │ [IMG]      │ │ [IMG]      │               │
│  │ Chatbots   │ │ Futuro     │ │ Integrar   │               │
│  │ vs Agentes │ │ agentes    │ │ MCP        │               │
│  │ 5 Jun      │ │ telefón.   │ │ 28 May     │               │
│  └────────────┘ └────────────┘ └────────────┘               │
│                                                              │
│                    [1] [2] [3] ... [→]                       │
└──────────────────────────────────────────────────────────────┘
```

---

## Boceto 14 — Artículo Individual
**Página:** Blog
**Sección:** Artículo completo

### Descripción visual
Layout de una columna central **(max-width 720px)** con fondo **#0F1525**.

**Header del artículo:**
- Breadcrumb: Inicio > Blog > Título
- Categoría badge **#7C3AED**
- Título en 42px Clash Display
- Autor con avatar circular (40px), nombre, fecha y tiempo de lectura
- Imagen destacada full-width con border-radius 16px
- Separador decorativo

**Cuerpo del artículo:**
- Drop cap (primera letra grande, 64px, color **#7C3AED**, font-weight bold)
- Párrafos en Inter 17px, line-height 1.8, color #E2E8F0
- H2/H3 en Clash Display 28px/22px
- Blockquotes con borde izquierdo 4px **#7C3AED** y fondo **#1A1F35**
- Listas con bullet points en **#7C3AED**
- Tablas con estilo oscuro, bordes **#2D3748**
- Código inline con fondo **#1A1F35** y color **#F59E0B**

**CTA al final:**
- Card "¿Listo para implementar IA?" con fondo **#1A1F35**, borde **#7C3AED**, botón CTA

### Mockup ASCII
```
┌──────────────────────────────────────────────────────────────┐
│  Inicio > Blog > Guía completa de adopción de IA            │
│                                                              │
│  🟣 Guía Completa                                            │
│                                                              │
│  Guía completa de adopción de IA para empresas en 2026       │
│                                                              │
│  [🟣 Avatar] Por Nexus AI  ·  18 Jun 2026  ·  10 min        │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │               [IMAGEN DESTACADA]                   │     │
│  └────────────────────────────────────────────────────┘     │
│                                                              │
│  ┌─                                                            │
│  │ Adoptar inteligencia artificial no es instalar un          │
│  │ software. Es transformar la forma en que tu empresa        │
│  │ opera...                                                    │
│                                                              │
│  ## ¿Por qué adoptar IA ahora?                                │
│                                                              │
│  Lorem ipsum dolor sit amet consectetur adipiscing elit.      │
│                                                              │
│  > "La IA no es el futuro, es el presente. Y nuestro          │
│  > compromiso es hacer que funcione para ti."                │
│                                                              │
│  ## Pasos para la adopción                                   │
│                                                              │
│  1. Diagnóstico inicial                                      │
│  2. Selección de herramientas                                │
│  3. Implementación                                           │
│  4. Formación                                                │
│                                                              │
│  ┌────────────────────────────────────────────────────┐     │
│  │  ¿Listo para implementar IA en tu empresa?         │     │
│  │  Agenda una consultoría gratuita                   │     │
│  │              [📅 Agendar consultoría →]             │     │
│  └────────────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────────────┘
```

---

## Boceto 15 — Grid de Casos (Portfolio)
**Página:** Portfolio
**Sección:** Grid de casos

### Descripción visual
Fondo **#0F1525**. Título "Resultados que transforman empresas" en 42px Clash Display. Subtítulo en Inter 18px.

Grid de 2 columnas (desktop) con tarjetas de caso de estudio. Cada tarjeta:
- Fondo **#1A1F35**, border-radius 20px, overflow hidden
- Imagen/placeholder en la parte superior (16:9) con superposición de gradiente oscuro abajo
- Categoría badge (pill) en la esquina superior izquierda de la imagen
- Tarjeta de contenido en la parte inferior: icono, título 22px, descripción, KPIs en formato de dos badges lado a lado (ej: "-94% Errores" / "+40% Velocidad") con fondo **rgba(16,185,129,0.1)** y texto **#10B981** para positivo, **rgba(239,68,68,0.1)** y **#EF4444** para reducción
- Botón "Ver caso completo →"

Filtros arriba del grid: pills de categoría (Todos, Automatización, Chatbots, Agentes IA, Digitalización, Atención) con scroll horizontal.

### Mockup ASCII
```
┌──────────────────────────────────────────────────────────────┐
│           Resultados que transforman empresas                │
│                                                              │
│  [Todos] [Automatización] [Chatbots] [Agentes] [Digital]     │
│                                                              │
│  ┌───────────────────┐ ┌───────────────────┐                 │
│  │ 🏭 [Automatizac.] │ │ 🏦 [Chatbots]     │                 │
│  │  ┌─────────────┐  │ │  ┌─────────────┐  │                 │
│  │  │   IMAGEN    │  │ │  │   IMAGEN    │  │                 │
│  │  └─────────────┘  │ │  └─────────────┘  │                 │
│  │  Planta reduce    │ │  Banco reduce     │                 │
│  │  errores un 94%   │ │  tickets un 67%   │                 │
│  │                   │ │                   │                 │
│  │  🟢 -94%  🟢+40% │ │  🟢 -67%  🟢 92%  │                 │
│  │  [Ver completo →] │ │  [Ver completo →] │                 │
│  └───────────────────┘ └───────────────────┘                 │
│                                                              │
│  ┌───────────────────┐ ┌───────────────────┐                 │
│  │ 📦 [Agentes IA]   │ │ 📋 [Digitalizac.] │                 │
│  │  ┌─────────────┐  │ │  ┌─────────────┐  │                 │
│  │  │   IMAGEN    │  │ │  │   IMAGEN    │  │                 │
│  │  └─────────────┘  │ │  └─────────────┘  │                 │
│  │  Ecommerce        │ │  Logística        │                 │
│  │  escala 3x        │ │  automatiza fact. │                 │
│  │                   │ │                   │                 │
│  │  🔵 3x   🟢-45%  │ │  🟢 90%   🟢-60%  │                 │
│  │  [Ver completo →] │ │  [Ver completo →] │                 │
│  └───────────────────┘ └───────────────────┘                 │
│                                                              │
│        [💬 ¿Quieres ser el próximo caso de éxito?]           │
│              [Agenda una consultoría gratuita]               │
└──────────────────────────────────────────────────────────────┘
```

---

## Boceto 16 — Detalle del Caso (Before/After)
**Página:** Portfolio
**Sección:** Caso individual

### Descripción visual
Fondo **#0A0E1A**. Layout de una columna con secciones.

**Hero del caso:**
- Breadcrumb: Inicio > Casos > Nombre del caso
- Categoría badge + icono grande
- Título en 42px
- Resumen ejecutivo en 18px
- Tres KPIS grandes en fila con iconos

**Sección "El Desafío":** texto + icono de problema

**Sección "La Solución":** texto + icono de solución + diagrama técnico simple

**Comparador Before/After:**
- Dos columnas lado a lado con slider interactivo
- Izquierda: "Antes" con fondo rojizo suave **rgba(239,68,68,0.05)**, métricas negativas
- Derecha: "Después" con fondo verdoso **rgba(16,185,129,0.05)**, métricas positivas
- Un slider/dragger vertical en el centro

**Testimonio del cliente:** card destacada con foto, nombre, cargo, cita

**CTA:** "¿Quieres resultados similares? Contáctanos"

### Mockup ASCII
```
┌──────────────────────────────────────────────────────────────┐
│  Inicio > Casos > Planta reduce errores un 94%               │
│                                                              │
│           🏭 Automatización                                  │
│  Planta reduce errores en control de calidad un 94%          │
│                                                              │
│     -94%           +40%           99.7%                      │
│    Errores        Velocidad     Satisfacción                 │
│                                                              │
│  ─── El Desafío ───                                         │
│  La planta perdía miles de euros por errores...              │
│                                                              │
│  ─── La Solución ───                                        │
│  Agentes de visión artificial para control de calidad...     │
│                                                              │
│  ┌── ANTES ──────┐ ║ ┌── DESPUÉS ────┐                     │
│  │ 🔴 Control    │ ║ │ 🟢 Visión     │                     │
│  │ manual lento  │ ║ │ artificial    │                     │
│  │               │ ║ │ 24/7          │                     │
│  │ ❌ Errores 12%│ ║ │ ✅ 0.7% error │                     │
│  │ ❌ 200 uds/h  │ ║ │ ✅ 350 uds/h  │                     │
│  │ ❌ 3 operarios │ ║ │ ✅ 1 operario │                     │
│  └───────────────┘ ║ └───────────────┘                     │
│                    ║                                        │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ "Implementamos... resultados desde el día 1"         │   │
│  │ — Juan Pérez, Director de Operaciones               │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│        [🚀 ¿Quieres resultados similares? Contáctanos]       │
└──────────────────────────────────────────────────────────────┘
```---

## Boceto 17 — Formulario Multi-step (Contacto)
**Página:** Contacto
**Sección:** Formulario de contacto multi-paso

### Descripción visual
Fondo **#0F1525**. Layout de dos columnas: formulario (60%) e info lateral (40%).

**Formulario multi-step (3 pasos):** con indicador de progreso arriba (3 círculos conectados por línea). El paso activo en **#7C3AED**, completado en **#10B981**, pendiente en **#4A5568**.

**Paso 1 — Información básica:**
- Nombre, Email, Teléfono, Empresa
- Inputs con fondo **#0A0E1A**, borde **#2D3748**, border-radius 12px, focus glow **#7C3AED**
- Botón "Siguiente →"

**Paso 2 — ¿Qué necesitas?**
- 6 opciones tipo card selectable (radio cards) con iconos: Agentes IA, Chatbots, Automatización, Consultoría, Formación, Otro
- La seleccionada se marca con borde **#7C3AED** y checkmark
- Textarea para descripción (max 500 chars con contador)
- Botones "← Atrás" y "Siguiente →"

**Paso 3 — Preferencias:**
- Slider de presupuesto (€2.500 - €50.000+)
- Timing: radio buttons (Urgente, 1 mes, 3 meses, Sin prisa)
- Checkbox de privacidad
- Botón "Enviar solicitud" con icono de confeti en hover

Transiciones entre pasos: slide horizontal suave 0.4s.

### Mockup ASCII
```
┌──────────────────────────────────────────────────────────────┐
│  Hablemos de tu proyecto                                     │
│                                                              │
│  Paso 1 ●━━━━━━○━━━━━━○   Paso 2 ○━━━━━━●━━━━━━○            │
│         Info     Servicio  Tiempo         Info     Servicio  │
│                                                              │
│  ┌───────────────────────┐  ┌───────────────────────┐        │
│  │ Nombre: [           ] │  │ ¿Qué necesitas?        │        │
│  │ Email:  [           ] │  │                        │        │
│  │ Tel:    [           ] │  │ ┌──┐ ┌──┐ ┌──┐       │        │
│  │ Empresa:[           ] │  │ │🤖│ │💬│ │⚡│       │        │
│  │                       │  │ └──┘ └──┘ └──┘       │        │
│  │   [Siguiente →]       │  │ ┌──┐ ┌──┐ ┌──┐       │        │
│  └───────────────────────┘  │ │🎯│ │📚│ │➕│       │        │
│                              │ └──┘ └──┘ └──┘       │        │
│  ✉️ hola@nexus-ai.agency    │                        │        │
│  📞 +34 900 123 456         │ Describe tu proyecto:  │        │
│  📍 Madrid, España          │ [                ]     │        │
│                              │ [← Atrás] [Siguiente→]│        │
│                              └───────────────────────┘        │
└──────────────────────────────────────────────────────────────┘
```

---

## Boceto 18 — Mapa + Información (Contacto)
**Página:** Contacto
**Sección:** Ubicación e info de contacto

### Descripción visual
Sección completa de ancho con fondo **#0A0E1A**.

Layout de dos columnas:

**Izquierda — Mapa interactivo:**
- Mapa embed (OpenStreetMap/Google Maps) con marcador en Madrid
- Alrededor del mapa, un borde sutil con glow **#7C3AED**
- Botón "Abrir en Google Maps →" abajo
- El mapa ocupa toda la altura de la sección (400px)

**Derecha — Información:**
- Tres cards apiladas con gap 16px, cada una con:
  - Icono grande (48px) en círculo con fondo **rgba(124,58,237,0.1)**
  - Título (Email / Teléfono / Oficina)
  - Valor/dato en blanco
  - Sub-texto descriptivo en #A0AEC0
- Badge "Respuesta en menos de 24h" con icono ⚡ y fondo **rgba(16,185,129,0.1)**, texto **#10B981**

### Mockup ASCII
```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  ┌──────────────────────┐ ┌──────────────────────┐           │
│  │                      │ │ ✉️  Email             │           │
│  │    [MAPA MADRID]     │ │ hola@nexus-ai.agency │           │
│  │                      │ │ Respuesta garantizada │           │
│  │   ╭───📍───╮        │ │                      │           │
│  │   │ Madrid │         │ │ 📞  Teléfono          │           │
│  │   ╰────────╯         │ │ +34 900 123 456      │           │
│  │                      │ │ L-V 9:00-18:00       │           │
│  │ [Abrir en Maps →]    │ │                      │           │
│  │                      │ │ 📍  Oficina           │           │
│  └──────────────────────┘ │ Madrid, España        │           │
│                           │ Trabajamos en todo el │           │
│                           │ mundo                 │           │
│                           │                      │           │
│                           │ ⚡ Respuesta < 24h   │           │
│                           └──────────────────────┘           │
└──────────────────────────────────────────────────────────────┘
```

---

## Boceto 19 — Página de Curso (Formación)
**Página:** Formación
**Sección:** Página de curso individual (ej: Curso de IA para Empresas)

### Descripción visual
Fondo **#0F1525**. Layout de dos columnas: contenido principal (65%) + sidebar (35%).

**Header del curso:**
- Badge "🎓 Curso" + categoría
- Título en 40px Clash Display
- Subtítulo descriptivo
- Metadata: duración, nivel, formato, precio en badges
- Barra de rating (⭐⭐⭐⭐⭐ 4.8/5)

**Módulos del curso (acordeón):**
- 5-6 módulos colapsables
- Cada uno: número, título, duración, icono expand/collapse
- Al expandir: lista de temas con checkmarks ✓
- Fondo **#1A1F35**, border-radius 12px

**Lo que aprenderás:** Grid 2×2 de iconos con texto

**Instructor:** Card con foto, nombre, bio

**Sidebar:**
- Card "Inscríbete ahora"
- Precio destacado grande
- Botón CTA "Reservar plaza" **#7C3AED**
- Badge "Plazas limitadas"
- Lista de "Incluye": certificado, materiales, acceso 1 año, comunidad
- Testimonios cortos

### Mockup ASCII
```
┌──────────────────────────────────────────────────────────────┐
│  Inicio > Formación > Curso de IA para Empresas              │
│                                                              │
│  🎓 Curso · Empresas                                         │
│  Curso de Inteligencia Artificial para Empresas              │
│  Aprende a implementar IA en tu empresa desde cero           │
│                                                              │
│  ⏱ 8 semanas  📊 Principiante  💻 Online  ⭐ 4.8/5          │
│                                                              │
│  ┌──────────────────────────┐ ┌──────────────────┐           │
│  │ Módulo 1: Fundamentos IA │ │ 💰 1.500€         │           │
│  │ ▶ 2h 30min               │ │                  │           │
│  │ al expandir:             │ │ [Reservar plaza] │           │
│  │ ✓ Qué es IA              │ │                  │           │
│  │ ✓ Tipos de IA            │ │ ⚡ Plazas limit. │           │
│  │ ✓ Casos de uso reales    │ │                  │           │
│  │                          │ │ Incluye:         │           │
│  │ Módulo 2: Automatización │ │ ✓ Certificado    │           │
│  │ ▶ 3h                     │ │ ✓ Materiales     │           │
│  │                          │ │ ✓ Acceso 1 año   │           │
│  │ Módulo 3: Chatbots       │ │ ✓ Comunidad      │           │
│  │ ▶ 2h                     │ │                  │           │
│  │                          │ │ "Excelente curso"│           │
│  │ Módulo 4: Implementación │ │ — María G.       │           │
│  │ ▶ 2h30min                │ └──────────────────┘           │
│  └──────────────────────────┘                               │
│                                                              │
│  🧑‍🏫 Instructor: Manuel Sánchez, CEO de Nexus AI            │
└──────────────────────────────────────────────────────────────┘
```

---

## Boceto 20 — Footer Completo
**Página:** Todas
**Sección:** Footer global

### Descripción visual
Fondo **#070B15** (más oscuro que el body). Borde superior sutil de 1px en **#1A1F35**. Padding vertical de 60px.

Layout en 5 columnas (más copyright abajo):

**Col 1 — Marca:**
- Logo Nexus AI (tipo grande)
- Descripción breve: "Agencia líder en inteligencia artificial. Agentes autónomos, integraciones MCP, automatización, chatbots y consultoría IA."
- Redes sociales: 4 iconos circulares (LinkedIn, Twitter/X, YouTube, GitHub) con fondo **rgba(255,255,255,0.05)**, hover **#7C3AED**

**Col 2 — Servicios:**
- Título "Servicios" en SemiBold 14px #FFFFFF
- Lista vertical: Agentes IA, Chatbots, Automatización, MCP, Consultoría, Digitalización
- Links en Inter 14px #A0AEC0, hover **#7C3AED**

**Col 3 — Soluciones:**
- Título "Soluciones"
- Por sector: Retail, Salud, Banca, Logística, Industria, Hostelería

**Col 4 — Empresa:**
- Título "Empresa"
- Sobre nosotros, Casos de éxito, Blog, Formación, Contacto

**Col 5 — Contacto:**
- Título "Contacto"
- Email, Teléfono, Dirección
- Badge "Respuesta en < 24h"

**Barra inferior:** Copyright "© 2026 Nexus AI. Todos los derechos reservados." + Política de privacidad | Cookies | Términos, en #4A5568 12px. Separador delgado arriba.

### Mockup ASCII
```
┌──────────────────────────────────────────────────────────────┐
│  ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───      │
│                                                              │
│  ┌──────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────┐  │
│  │NEXUS │ │Servicios │ │Soluciones│ │Empresa   │ │Contact│  │
│  │ AI   │ │          │ │          │ │          │ │      │  │
│  │Agencia│ │• Agentes │ │• Retail  │ │• Sobre   │ │hola@ │  │
│  │líder  │ │  IA      │ │• Salud   │ │  nosotros│ │nexus │  │
│  │en IA  │ │• Chatbots│ │• Banca   │ │• Casos   │ │      │  │
│  │       │ │• Automat.│ │• Logíst. │ │• Blog    │ │+34   │  │
│  │[in][𝕏] │ │• MCP     │ │• Indust.│ │• Formac. │ │900   │  │
│  │[▶][⌨] │ │• Consult.│ │• Hostel. │ │• Contacto│ │      │  │
│  │       │ │• Digital.│ │          │ │          │ │⚡<24h│  │
│  └──────┘ └──────────┘ └──────────┘ └──────────┘ └──────┘  │
│                                                              │
│  ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ─── ───      │
│  © 2026 Nexus AI  |  Privacidad  |  Cookies  |  Términos    │
└──────────────────────────────────────────────────────────────┘
```

---

> **Fin de los 20 bocetos.**  
> Todos los bocetos se basan en el contenido y estructura real del sitio https://nexus-ai-agency2-production.up.railway.app/ y proponen mejoras visuales detalladas con colores, tipografía, layouts, animaciones y mockups ASCII.