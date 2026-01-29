igreja-platform-aws/
├── terraform/
│   ├── environments/
│   │   ├── dev/
│   │   └── prod/
│   ├── modules/
│   │   ├── network/        # VPC, Subnet, IGW, Route Tables
│   │   ├── compute/        # EC2 (K3s nodes)
│   │   └── security/       # SG, IAM
│   ├── backend.tf
│   ├── providers.tf
│   └── variables.tf
│
├── k3s/
│   ├── install.sh          # bootstrap k3s
│   └── manifests/
│
├── argocd/
│   ├── install.yaml
│   └── applications/
│
├── apps/
│   └── igreja-platform/    # (seu projeto atual)
│
└── README.md
# Igreja Platform AWS

Projeto de **Platform Engineering / DevOps** que implementa uma plataforma Kubernetes
realista em **AWS**, utilizando **K3s**, **Terraform**, **GitOps (ArgoCD)** e
observabilidade completa.

Este repositório representa um ambiente próximo de produção, focado em boas
práticas de infraestrutura, automação e confiabilidade.

---

## 🎯 Objetivos

- Provisionar infraestrutura na AWS de forma declarativa (Terraform)
- Criar cluster Kubernetes leve com **K3s**
- Gerenciar aplicações via **GitOps (ArgoCD)**
- Suportar múltiplos ambientes (dev / prod)
- Integrar observabilidade (Prometheus + Grafana)
- Preparar base para escalabilidade e automação contínua

---

## 🧱 Arquitetura Geral

```text
Terraform
  │
  ├── AWS VPC
  │     ├── Subnet pública
  │     ├── Security Groups
  │     └── EC2
  │
  ▼
EC2 (Amazon Linux)
  └── K3s (Kubernetes)
        ├── ArgoCD (GitOps)
        ├── Backend (Node.js)
        ├── PostgreSQL
        └── Observabilidade
🛠️ Stack Tecnológica

Cloud: AWS

Infra as Code: Terraform

Kubernetes: K3s

GitOps: ArgoCD

Backend: Node.js + Express

Banco: PostgreSQL

Observabilidade: Prometheus + Grafana
terraform/        # Infraestrutura AWS
k3s/              # Bootstrap do cluster
argocd/           # GitOps e Applications
apps/             # Aplicações Kubernetes
🚀 Fluxo de Deploy

Terraform provisiona a infraestrutura AWS

EC2 sobe com K3s instalado automaticamente

ArgoCD é instalado no cluster

ArgoCD sincroniza aplicações a partir do Git

Aplicações são implantadas de forma declarativa

📊 Observabilidade

Prometheus coleta métricas do cluster e aplicações

Grafana exibe dashboards por namespace e workload

Base preparada para alertas futuros

🔐 Segurança

Security Groups com princípio de menor privilégio

Comunicação interna via Kubernetes Services

Secrets gerenciados via Kubernetes Secrets

Sem exposição externa desnecessária

🧪 Status do Projeto

 Infra AWS via Terraform

 EC2 funcional

 K3s configurado

 ArgoCD ativo

 Aplicações migradas

 Observabilidade integrada

👨‍💻 Autor

Fagner dos Santos Silva
Projeto focado em DevOps, Platform Engineering e Cloud Native

🏁 Considerações Finais

Este projeto demonstra a construção de uma plataforma Kubernetes moderna,
seguindo práticas usadas em ambientes de produção, desde a infraestrutura até
o deploy automatizado das aplicações.

