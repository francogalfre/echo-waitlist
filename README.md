# Echo

![Echo](/src/app/opengraph-image.png)

La plataforma inteligente para recolectar, analizar y mostrar feedback de usuarios.

---

## Acerca de

Echo es un waitlist page donde los usuarios pueden registrar su email y nombre para acceder anticipadamente a la plataforma. El proyecto incluye:

- **Dashboard con AI** — Resúmenes automáticos del feedback y detección de insights
- **Widget de feedback** — Componente integrable en cualquier sitio
- **API de feedback** — Endpoints para recolectar y consultar feedback
- **Análisis de sentimiento** — La IA detecta tendencias y temas recurrentes

## Stack

- **Framework** — Next.js 16 (App Router)
- **Estilo** — Tailwind CSS v4 + shadcn/ui
- **Animaciones** — Motion + canvas-confetti
- **Smooth scroll** — Lenis
- **Base de datos** — Notion API
- **Email** — Resend + React Email
- **Rate limiting** — Upstash Redis
- **i18n** — Español / Inglés

## Estructura

```
src/
├── app/
│   ├── (landing)/            # Página de espera
│   │   ├── page.tsx
│   │   └── page.client.tsx
│   ├── api/                  # Endpoints
│   │   ├── mail/route.ts
│   │   └── notion/route.ts
│   ├── lib/                  # Config del sitio
│   │   ├── site.ts           # URL, nombre, descripción
│   │   ├── fonts.ts          # Fuentes (Geist, Instrument Sans)
│   │   └── metadata.ts       # SEO metadata
│   ├── icon.svg              # Favicon
│   ├── opengraph-image.png   # OG image
│   ├── twitter-image.png     # Twitter card
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── landing/              # Componentes de la landing
│   ├── magicui/              # Efectos (confetti)
│   ├── svgs/                 # Iconos SVG
│   └── ui/                   # Componentes base (button, accordion)
├── emails/                   # Templates de email
├── hooks/                    # Custom hooks
├── i18n/                     # Traducciones (es.json, en.json)
├── lib/                      # Utilidades, i18n, Notion client
└── providers/                # Context providers (language, smooth scroll)
```

## Configuración

### Variables de entorno

Crea un archivo `.env.local`:

```env
NOTION_SECRET=""
NOTION_DB_ID=""
RESEND_API_KEY=""
RESEND_FROM_EMAIL=""
UPSTASH_REDIS_REST_URL=""
UPSTASH_REDIS_REST_TOKEN=""
```

### Desarrollo

```bash
pnpm install
pnpm dev
```

### Build

```bash
pnpm build
```

## Licencia

MIT
