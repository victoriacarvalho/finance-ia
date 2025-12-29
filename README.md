# 💰 FinanceIA
![Status](https://img.shields.io/badge/STATUS-CONCLUÍDO-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

O **FinanceIA** é uma plataforma moderna de gestão financeira pessoal, desenvolvida para simplificar o controlo de despesas e receitas. Com uma interface intuitiva e dashboards interativos, o sistema auxilia na tomada de decisões financeiras inteligentes, oferecendo uma visão clara da saúde financeira do utilizador em tempo real.

---


## 🚀 Funcionalidades

* **Dashboard Interativo:** Visualização de resumo financeiro do mês (Receitas, Despesas, Saldo e Investimentos) com gráficos dinâmicos.
* **Gestão de Transações:** Adicionar, editar e remover movimentações financeiras.
* **Categorização:** Classificação de despesas (Casa, Alimentação, Transporte, Lazer, Saúde, etc.) e métodos de pagamento.
* **Filtros Temporais:** Navegação entre meses para análise histórica do ano corrente.
* **Autenticação Segura:** Login e gestão de contas integrada com **Clerk**.
* **Design Responsivo:** Interface moderna e adaptável construída com **ShadCN UI** e **Tailwind CSS**.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as melhores práticas da stack moderna de React/Next.js:

* **Core:** [Next.js 14](https://nextjs.org/) (App Router), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/), [ShadCN UI](https://ui.shadcn.com/)
* **Base de Dados:** [PostgreSQL](https://www.postgresql.org/) (via [NeonDB](https://neon.tech/)), [Prisma ORM](https://www.prisma.io/)
* **Autenticação:** [Clerk](https://clerk.com/)
* **Gráficos:** [Recharts](https://recharts.org/)
* **Validação:** [Zod](https://zod.dev/) & [React Hook Form](https://react-hook-form.com/)

---

## 📦 Instalação e Configuração

Siga os passos abaixo para executar o projeto localmente.

### Pré-requisitos
* **Node.js** (v18 ou superior)
* Conta no **Clerk** (para chaves de autenticação)
* Conta no **NeonDB** ou uma instância local de PostgreSQL

### 1. Clonar o repositório

```bash
git clone [https://github.com/victoriacarvalho/finance-ia.git](https://github.com/victoriacarvalho/finance-ia.git)
cd finance-ia
