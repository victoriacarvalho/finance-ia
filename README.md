# 💰 FinanceIA

![Status](https://img.shields.io/badge/STATUS-CONCLUÍDO-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

O **FinanceIA** é uma plataforma inteligente de gestão financeira pessoal (SaaS), desenvolvida para simplificar o controlo de despesas, receitas e investimentos. Utilizando a mais moderna stack do ecossistema React, o sistema oferece dashboards interativos, relatórios detalhados e insights financeiros em tempo real.

---


## 🚀 Funcionalidades Principais

### 📊 Dashboard Inteligente
* **Resumo Financeiro:** Visualização clara de Saldo Total, Receitas, Despesas e Investimentos do mês.
* **Gráficos Interativos:**
    * *Donut Chart:* Distribuição de despesas por tipo de transação (Depósitos, Despesas, Investimentos).
    * *Barras/Linhas:* Evolução financeira ao longo do ano.
* **Filtro Temporal:** Navegação fluida entre os meses para análise histórica.

### 💸 Gestão de Transações
* **CRUD Completo:** Adicionar, editar e remover transações de forma intuitiva.
* **Categorização Detalhada:**
    * *Tipos:* Depósito, Despesa, Investimento.
    * *Categorias:* Moradia, Alimentação, Transporte, Lazer, Saúde, Educação, etc..
    * *Métodos de Pagamento:* Cartão de Crédito/Débito, Pix, Boleto, Dinheiro, Transferência.
* **Validação de Dados:** Formulários seguros com validação em tempo real utilizando *Zod* e *React Hook Form*.

---

## 🛠️ Stack Tecnológica

O projeto foi construído seguindo as melhores práticas de desenvolvimento web moderno:

* **Frontend:**
    * [Next.js 14](https://nextjs.org/) (App Router & Server Actions)
    * [React](https://react.dev/)
    * [TypeScript](https://www.typescriptlang.org/)
    * [Tailwind CSS](https://tailwindcss.com/) (Estilização)
    * [ShadCN UI](https://ui.shadcn.com/) (Componentes de Interface acessíveis)
* **Backend & Dados:**
    * [PostgreSQL](https://www.postgresql.org/) (Base de dados Relacional)
    * [Prisma ORM](https://www.prisma.io/) (Manipulação de dados)
    * [NeonDB](https://neon.tech/) (Banco de dados Serverless)
* **Autenticação:**
    * [Clerk](https://clerk.com/) (Gestão completa de utilizadores e sessões)
* **Ferramentas Adicionais:**
    * [Recharts](https://recharts.org/) (Gráficos)
    * [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) (Formulários e Validação Schema)
    * [Date-fns](https://date-fns.org/) (Manipulação de datas)

---

## ⚡ Instalação e Execução

Siga os passos abaixo para rodar o projeto no seu ambiente local.

### 1. Pré-requisitos
Certifique-se de ter instalado:
* **Node.js** (v18+)
* **Gerenciador de pacotes** (npm, yarn ou pnpm)

### 2. Clonar o repositório

```bash
git clone [https://github.com/victoriacarvalho/finance-ia.git](https://github.com/victoriacarvalho/finance-ia.git)
cd finance-ia

```

### 3. Instalar dependências

```bash
npm install

```

### 4. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e preencha as chaves necessárias (baseado nos serviços utilizados):

```env
# Conexão com o Banco de Dados (NeonDB ou Local)
DATABASE_URL="postgresql://user:password@host:port/database?sslmode=require"

# Autenticação (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

```

### 5. Configurar o Banco de Dados

Execute as migrações do Prisma para criar as tabelas no seu banco de dados:

```bash
npx prisma generate
npx prisma migrate dev --name init

```

### 6. Rodar a Aplicação

```bash
npm run dev

```

Acesse `http://localhost:3000` no seu navegador.

---

## 📂 Estrutura do Projeto

```bash
finance-ia/
├── app/                        # Diretório principal do Next.js (App Router)
│   ├── (home)/                 # Rota raiz (Dashboard)
│   │   ├── _components/        # Componentes exclusivos do Dashboard (Cards, Gráficos)
│   │   └── page.tsx            # Página principal
│   ├── transactions/           # Rota de Transações
│   │   ├── _components/        # Componentes de listagem e edição
│   │   └── page.tsx            # Página de listagem (DataTable)
│   ├── login/                  # Rota de Autenticação
│   ├── _actions/               # Server Actions (Backend Logic)
│   ├── _data/                  # Data Fetching (Acesso ao BD)
│   ├── _components/            # Componentes Globais (Navbar, UI base)
│   └── layout.tsx              # Layout raiz da aplicação
├── prisma/                     # Schema do Banco de Dados e Migrações
├── public/                     # Assets estáticos (Imagens, Ícones)
└── ...

```

---

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um **Fork** do projeto.
2. Crie uma Branch para sua Feature (`git checkout -b feature/NovaFeature`).
3. Faça o Commit (`git commit -m 'Adiciona nova feature'`).
4. Faça o Push (`git push origin feature/NovaFeature`).
5. Abra um **Pull Request**.

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](https://www.google.com/search?q=LICENSE) para mais detalhes.

---

## 👩‍💻 Autora

Desenvolvido com 💜 por **Victória Carvalho**
