---
title: "Docker na VPS Linux: do zero à produção"
date: "2025-04-20"
description: "Como configurar Docker e Docker Compose em uma VPS Linux para rodar múltiplos projetos com segurança, Nginx como reverse proxy e SSL automático."
tags: ["Docker", "Linux", "DevOps"]
readTime: "8 min"
---

## Visão geral da stack

Rodar múltiplos projetos em uma única VPS é mais simples do que parece quando você usa:

- **Docker** para isolar cada aplicação em seu container
- **Docker Compose** para orquestrar os serviços
- **Nginx** como reverse proxy (uma porta 443 para todos)
- **Certbot** para SSL automático via Let's Encrypt

A arquitetura fica assim:

```
Internet
  │
  ▼
Nginx (443/80) ← único ponto de entrada
  ├── /app1 → Container app1:3000
  ├── /app2 → Container app2:8000
  └── /api  → Container api:8001
```

---

## 1. Instalando Docker no Ubuntu

```bash
# Dependências
sudo apt update && sudo apt install -y ca-certificates curl gnupg

# Chave GPG do Docker
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
  sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Repositório
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list

# Instalar
sudo apt update && sudo apt install -y docker-ce docker-ce-cli docker-compose-plugin

# Rodar sem sudo
sudo usermod -aG docker $USER && newgrp docker
```

---

## 2. Estrutura de diretórios recomendada

```
/var/www/
├── projeto-a/
│   ├── docker-compose.yml
│   ├── .env
│   └── app/
├── projeto-b/
│   ├── docker-compose.yml
│   └── .env
└── nginx/
    └── sites-available/
        ├── projeto-a.conf
        └── projeto-b.conf
```

Cada projeto tem seu próprio `docker-compose.yml` e `.env`. O Nginx na máquina host faz o roteamento.

---

## 3. docker-compose.yml padrão

```yaml
services:
  app:
    build: .
    container_name: meu_projeto
    restart: unless-stopped
    network_mode: host        # usa a rede do host diretamente
    environment:
      DATABASE_URL: "${DATABASE_URL}"
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
```

> **Por que `network_mode: host`?** Simplifica a comunicação com o PostgreSQL e Nginx rodando no host, sem precisar configurar redes Docker customizadas.

---

## 4. Nginx como reverse proxy

```nginx
server {
    listen 443 ssl;
    server_name meu-projeto.exemplo.com.br;

    ssl_certificate     /etc/letsencrypt/live/meu-projeto.exemplo.com.br/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/meu-projeto.exemplo.com.br/privkey.pem;

    location / {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## 5. SSL automático com Certbot

```bash
# Instalar
sudo apt install -y certbot python3-certbot-nginx

# Gerar certificado
sudo certbot --nginx -d meu-projeto.exemplo.com.br

# Renovação automática (já configurada pelo certbot)
sudo systemctl status certbot.timer
```

---

## Comandos úteis do dia a dia

```bash
# Ver todos os containers
docker ps -a

# Logs em tempo real
docker logs -f nome_container

# Reiniciar um serviço
docker compose restart

# Rebuild após mudança no código
docker compose up -d --build

# Limpar imagens não utilizadas
docker image prune -af

# Uso de recursos
docker stats
```

---

## Segurança básica

- Nunca exponha portas dos containers diretamente (use `127.0.0.1:porta:porta`)
- Sempre use `.env` para segredos — jamais no `docker-compose.yml`
- Configure `restart: unless-stopped` para recuperação automática
- Monitore logs com `docker logs` e configure alertas

> Com essa estrutura você consegue rodar 5, 10 projetos na mesma VPS com isolamento total, SSL em todos e gerenciamento simples via Docker Compose.
