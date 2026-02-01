# Igreja Platform AWS

Projeto de **Platform Engineering / DevOps** que implementa uma plataforma Kubernetes realista na AWS, utilizando **K3s**, **Terraform**, **Docker**, **Traefik** e práticas modernas de deploy.

Este repositório representa um ambiente próximo de produção, com foco em **infraestrutura como código**, **containerização**, **networking Kubernetes** e **boas práticas operacionais**.

---

## 🎯 Objetivos do Projeto

- Provisionar infraestrutura AWS de forma declarativa
- Criar um cluster Kubernetes leve com K3s
- Containerizar aplicações frontend e backend
- Expor aplicações via Traefik (Ingress Controller)
- Suportar múltiplos ambientes (dev / hml / prod)
- Preparar base para GitOps (ArgoCD)
- Simular cenários reais de produção

---

## 🧱 Arquitetura Geral

```text
Terraform
  │
  ├── AWS VPC
  │     ├── Subnet pública
  │     ├── Security Groups
  │     └── EC2 (Amazon Linux)
  │
  ▼
EC2
  └── K3s (Kubernetes)
        ├── Traefik (Ingress Controller)
        ├── Frontend (React + Nginx)
        ├── Backend (Node.js + Express)
        └── PostgreSQL (dev)
🛠️ Stack Tecnológica

Cloud: AWS

Infra as Code: Terraform

Container Runtime: Docker / containerd

Kubernetes: K3s

Ingress Controller: Traefik

Frontend: React + Vite + Nginx

Backend: Node.js + Express

Banco de Dados: PostgreSQL

Registry: AWS ECR

igreja-platform-aws/
├── terraform/        # Infraestrutura AWS (VPC, EC2, SG, etc)
├── k3s/              # Bootstrap do cluster K3s
├── k8s/              # Manifests Kubernetes
│   └── apps/
│       ├── frontend/
│       │   └── hml/
│       └── backend/
│           └── hml/
├── frontend/         # Código do frontend (React)
├── backend/          # Código do backend (Node.js)
├── logs/             # Logs locais
└── README.md

🚀 Fluxo de Deploy (HML)

Infraestrutura provisionada na AWS

EC2 sobe com K3s instalado

Traefik é iniciado como Ingress Controller

Imagens Docker são buildadas localmente

Imagens são publicadas no AWS ECR

Manifests Kubernetes aplicados no namespace igreja-hml

Aplicações expostas via Traefik

🌐 Endpoints (HML)
Frontend
http://frontend-hml.ministerionovotempo.app.br

Backend

http://backend-hml.ministerionovotempo.app.br

Healthcheck Backend

GET /health
→ { "status": "ok" }

🧪 Testes Importantes
Teste interno no cluster

kubectl run tmp-curl \
  -n igreja-hml \
  --rm -it \
  --image=busybox:1.36 \
  --restart=Never \
  -- wget -qO- http://backend-hml:80/health

Teste via NodePort (EC2)

curl -H "Host: backend-hml.ministerionovotempo.app.br" http://127.0.0.1:30080/health

Teste externo (máquina local)

curl http://backend-hml.ministerionovotempo.app.br/health

🔐 Observações de Rede (Importante)

A EC2 não consegue acessar o próprio IP público (hairpin NAT da AWS)

Testes via curl no IP público devem ser feitos fora da instância

Isso é comportamento esperado da AWS, não erro de configuração

🧪 Status do Projeto

 Infra AWS provisionada

 K3s funcional

 Traefik configurado

 Frontend HML funcional

 Backend HML funcional

 Integração frontend ↔ backend

 ArgoCD (próxima fase)

 Observabilidade

 HTTPS completo (443 exposto)

👨‍💻 Autor

Fagner dos Santos Silva

Projeto focado em DevOps, Platform Engineering e Cloud Native, com abordagem prática e próxima da realidade de produção.

🏁 Considerações Finais

Este projeto demonstra a construção de uma plataforma Kubernetes moderna na AWS, passando por infraestrutura, containerização, networking, exposição de serviços e troubleshooting real — exatamente como ocorre em ambientes profissionais.
