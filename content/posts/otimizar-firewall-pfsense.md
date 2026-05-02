---
title: "Como otimizar regras de Firewall no pfSense"
date: "2025-05-01"
description: "Boas práticas para organizar, priorizar e otimizar as regras de firewall no pfSense sem comprometer a segurança da rede."
tags: ["pfSense", "Firewall", "Redes"]
readTime: "6 min"
---

## Por que organizar suas regras importa

O pfSense processa as regras de firewall **de cima para baixo**, e para na primeira regra que casar com o pacote. Isso significa que a ordem das regras impacta diretamente a **performance** e a **segurança** da sua rede.

Regras mal organizadas podem:
- Bloquear tráfego legítimo acidentalmente
- Deixar brechas de segurança abertas
- Degradar a performance em ambientes com alto volume de pacotes

---

## 1. Coloque as regras mais específicas primeiro

Sempre deixe as regras mais específicas (com IPs, portas e protocolos definidos) antes das regras genéricas.

```
# Ruim: regra genérica antes da específica
Allow ANY → ANY
Allow 192.168.1.10 → 10.0.0.5:443

# Bom: específica primeiro
Allow 192.168.1.10 → 10.0.0.5:443
Deny ANY → ANY
```

---

## 2. Use aliases para manter as regras limpas

Em vez de criar dezenas de regras individuais para cada IP ou porta, use **Aliases** (`Firewall > Aliases`).

```
Alias: SERVIDORES_INTERNOS
IPs: 192.168.1.10, 192.168.1.20, 192.168.1.30

Alias: PORTAS_WEB
Portas: 80, 443, 8080, 8443
```

Isso reduz o número de regras e facilita a manutenção — uma mudança no alias reflete em todas as regras que o usam.

---

## 3. Ative o State Table Optimization

Vá em `System > Advanced > Firewall & NAT` e configure:

- **Firewall Optimization Options**: `Conservative` para ambientes com conexões longas (VoIP, VPN), ou `Aggressive` para servidores web com muitas conexões curtas.
- **Maximum States**: ajuste de acordo com a memória disponível. Regra geral: 1 GB RAM suporta ~150.000 states.

---

## 4. Bloquear explicitamente ao invés de confiar no default deny

Embora o pfSense tenha um *implicit deny* no final das regras, adicione um **bloco explícito com log ativado** no final de cada interface. Isso facilita o diagnóstico de tráfego bloqueado:

```
Rule: Block ANY → ANY (Log: enabled)
Description: "Default deny — Log all"
```

---

## 5. Use Floating Rules para políticas globais

As `Floating Rules` (`Firewall > Rules > Floating`) aplicam em todas as interfaces ao mesmo tempo. São ideais para:

- Bloquear países via GeoIP
- Marcar tráfego para QoS (traffic shaping)
- Regras de emergência temporárias

---

## Checklist de otimização

- [ ] Regras específicas antes das genéricas
- [ ] Aliases criados para IPs e portas repetidos
- [ ] State table optimization configurada
- [ ] Bloco explícito com log no final de cada interface
- [ ] Revisão mensal das regras não utilizadas (`Diagnostics > States`)
- [ ] Backup da config após cada mudança (`Diagnostics > Backup & Restore`)

---

> **Dica bônus:** Use a ferramenta `pfTop` via console (`Diagnostics > Command Prompt`) para visualizar em tempo real os estados de conexão e identificar gargalos.
