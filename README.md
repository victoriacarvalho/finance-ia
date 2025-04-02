# **CSI606-2024-02 - Remoto - Proposta de Trabalho Final**

## *Discente: Victória Carvalho*

### Resumo

O trabalho final consiste no desenvolvimento de um sistema chamado **FinanceIA**, que visa facilitar o controle financeiro pessoal. O sistema oferecerá funcionalidades que permitem ao usuário gerenciar suas transações financeiras de forma intuitiva e prática. O principal objetivo do FinanceIA é proporcionar uma visão geral das finanças atuais, auxiliando na tomada de decisões financeiras.

### 1. Tema

O tema do trabalho final é o desenvolvimento de um sistema de controle financeiro chamado **FinanceIA**, que inclui funcionalidades para gerenciar transações financeiras e visualizar métricas em um dashboard intuitivo.

### 2. Escopo

Este projeto terá as seguintes funcionalidades:

- **Adicionar transações:** Permite ao usuário registrar novas transações financeiras (entradas ou saídas).
- **Editar transações:** Permite alterar os detalhes de transações já cadastradas.
- **Remover transações:** Permite excluir transações desnecessárias ou cadastradas por engano.
- **Dashboard inicial:** Apresenta um resumo das transações do ano atual, incluindo gráficos e métricas relevantes.
- **Página de transações:** Lista detalhada das transações realizadas no ano atual.

### 3. Restrições

Neste trabalho, não serão considerados os seguintes aspectos:

- Transações de anos anteriores não estarão disponíveis para consulta ou gerenciamento.
- Funcionalidades avançadas, como previsão de gastos futuros ou integração com contas bancárias, não serão implementadas nesta versão.

### 4. Protótipo

Protótipos para as seguintes páginas foram elaborados:

- **Dashboard inicial:** Apresenta gráficos e métricas gerais das finanças do ano atual.
- **Página de transações:** Lista detalhada com filtros e opções para gerenciar as transações cadastradas.

Os protótipos podem ser acessados no repositório do projeto no GitHub, disponível em: [https://github.com/victoriacarvalho/finance-ia].

### 5. Instalação e Configuração

#### 5.1 Requisitos
- [Next.js](https://nextjs.org)
- [NeonDB](https://console.neon.tech/app/welcome)
- [Clerk Auth](https://clerk.com)

#### 5.2 Instalação

```sh
npm install @clerk/nextjs
npm install @clerk/themes@2.1.37
```

#### 5.3 Configuração de Hooks
- [Git Hooks](https://git-scm.com/book/ms/v2/Customizing-Git-Git-Hooks)
- Husky:
  ```sh
  npm i -D husky@9.1.6
  npx husky init
  ```
- Lint-Staged:
  ```sh
  npm i -D lint-staged@12.3.2
  ```
- Git Commit Message Linter:
  ```sh
  npm i git-commit-msg-linter@5.0.8
  ```

#### 5.4 Banco de Dados
- [Prisma](https://www.prisma.io)
  ```sh
  npm install prisma@5.21.1
  npx prisma init
  npm i @prisma/client@5.21.1
  ```
- Prisma Studio:
  ```sh
  npx prisma studio
  ```
- Migrações:
  ```sh
  npx prisma migrate dev --name init_db
  npx prisma migrate dev --name add_user_id_to_transaction
  ```

#### 5.5 Formatação de Código
- Prettier com suporte ao TailwindCSS:
  ```sh
  npm install -D prettier prettier-plugin-tailwindcss
  ```

#### 5.6 Componentes UI
- [ShadCN](https://ui.shadcn.com)
  ```sh
  npx shadcn@2.1.3 add button
  npx shadcn@latest add table
  npm install @tanstack/react-table@8.20.5
  npx shadcn@latest add badge
  ```
- Outros pacotes UI:
  ```sh
  npm install @radix-ui/react-dialog
  npm install @radix-ui/react-label
  npm install react-hook-form
  npm install react-number-format
  npm install @radix-ui/react-select
  npm install date-fns
  npm install react-day-picker
  npm install @radix-ui/react-popover
  npm install zod
  npm install @hookform/resolvers
  npx shadcn@latest add input
  ```

#### 5.7 Execução do Projeto
```sh
npm run dev
```

