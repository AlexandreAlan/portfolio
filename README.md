# Alexandre Alan — Portfólio & Blog

Portfólio pessoal e blog profissional de Alexandre Alan, Analista de Redes N3 e Desenvolvedor Full-Stack. Rodando 24/7 em produção em uma VPS Linux nos EUA.

**[blog.morenadoaco.com.br](https://blog.morenadoaco.com.br)**

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 14 (App Router) + TypeScript |
| Estilização | Tailwind CSS |
| Animações | Framer Motion |
| Ícones | Lucide React + React Icons |
| Blog | Markdown + gray-matter + remark |
| Servidor | Nginx (reverse proxy + HTTPS) |
| Container | Docker + Docker Compose |
| SSL | Let's Encrypt (Certbot) |
| Infra | VPS Linux — EUA |

---

## Estrutura

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Metadata + fontes (Inter + JetBrains Mono)
│   │   ├── page.tsx            # Página principal
│   │   ├── globals.css
│   │   ├── sobre/page.tsx
│   │   ├── servicos/page.tsx
│   │   ├── projetos/page.tsx
│   │   ├── contato/page.tsx
│   │   └── blog/
│   │       ├── page.tsx        # Listagem de posts
│   │       └── [slug]/
│   │           └── page.tsx    # Post individual
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Specialties.tsx     # Seção de especialidades
│   │   ├── TechStack.tsx       # Stack com logos reais
│   │   ├── Projects.tsx        # Projetos (Produção / Laboratório)
│   │   ├── BlogSection.tsx
│   │   ├── Contact.tsx         # Formulário → WhatsApp
│   │   ├── Footer.tsx
│   │   ├── LivePanel.tsx       # Painel ao vivo de status/métricas
│   │   ├── SystemStatus.tsx
│   │   └── teasers/
│   │       ├── ServicesTeaser.tsx
│   │       ├── ProjectsTeaser.tsx
│   │       └── ContactTeaser.tsx
│   └── lib/
│       └── posts.ts            # Leitura dos posts Markdown
├── content/
│   └── posts/                  # Posts em Markdown com frontmatter
├── nginx/
│   └── nginx.conf              # Config HTTPS + proxy reverso
├── Dockerfile                  # Build multi-stage otimizado
└── docker-compose.yml
```

---

## Rodando localmente

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento (porta 3002)
npm run dev

# Build de produção
npm run build
npm start
```

---

## Deploy na VPS

### 1. Gerar certificado SSL

```bash
sudo certbot certonly --nginx -d blog.morenadoaco.com.br
```

### 2. Configurar Nginx

```bash
sudo cp nginx/nginx.conf /etc/nginx/sites-available/portfolio
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

### 3. Subir o container

```bash
docker compose up -d --build
```

---

## Adicionando posts ao blog

Crie um arquivo `.md` em `content/posts/` com o seguinte frontmatter:

```markdown
---
title: "Título do post"
date: "2025-05-01"
description: "Descrição curta para o card e SEO."
tags: ["Docker", "Linux"]
readTime: "5 min"
---

Conteúdo em Markdown aqui...
```

Após adicionar o arquivo, rode `docker compose up -d --build` para publicar.

---

## Segurança

- **Next.js mantido atualizado**: `14.2.3`→**`14.2.35`** (CVE-2025-29927, bypass de middleware).
- **Container não-root** (`USER nextjs`), com `cap_drop: ALL` e `no-new-privileges`.
- **Bind apenas em `127.0.0.1:3005`** (atrás do nginx), em vez de `network_mode: host` — a porta não fica exposta em todas as interfaces.
- `.dockerignore` evita vazar `.env`/`.git`/`node_modules` para a imagem.

### Histórico de versões
- **2026-06-25** — hardening de segurança: Next 14.2.35, container não-root, bind em loopback, `.dockerignore`.

---

## Autor

**Alexandre Alan** — Analista de Redes N3 & Desenvolvedor Full-Stack

- [LinkedIn](https://www.linkedin.com/in/alexandre-alan-a5a8362ab)
- [GitHub](https://github.com/AlexandreAlan)
- [blog.morenadoaco.com.br](https://blog.morenadoaco.com.br)
