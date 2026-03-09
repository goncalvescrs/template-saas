# Template SaaS

Um acelerador de desenvolvimento de Software as a Service (SaaS) projetado para economizar mais de **60 horas de setup inicial**. Este template fornece uma base sólida, segura e escalável, entregando uma arquitetura **MVC** com foco em **API First**, garantindo que o backend seja robusto e pronto para integração com qualquer interface ou serviço externo. Isso permite focar no que realmente importa: as regras de negócio.

## Principais Funcionalidades

### Core & Arquitetura

- **Arquitetura MVC & API-First:** Separação clara de responsabilidades, facilitando a manutenção e escalabilidade.
- **Tratamento de Erros Customizado:** Respostas de erro padronizadas e previsíveis em toda a aplicação.
- **Banco de Dados:** Integração robusta com PostgreSQL via `pg` e gerenciamento de schema com `node-pg-migrate`.
- **Dockerizado:** Ambiente de desenvolvimento isolado e padronizado usando Docker Compose.

### Segurança & Usuários

- **CRUD de Usuários:** Gerenciamento completo da entidade de usuário.
- **Criptografia:** Senhas protegidas utilizando `bcryptjs`.
- **Sessões & Cookies:** Gerenciamento seguro de estado de autenticação (`cookie`, `set-cookie-parser`).
- **Autorização:** Sistema de Autorização avançado (RBAC/Permissões).(Em Desenvolvimento)
- **Páginas:** Páginas de Cadastro e Login. (Em Desenvolvimento)

### Qualidade de Código & Testes

- **Testes Automatizados:** Configuração robusta com **Jest** para testes de integração e unidade (rodando em paralelo com a aplicação no modo watch).
- **Linting & Formatting:** ESLint e Prettier já configurados para manter o padrão do código.

## Tecnologias Utilizadas

- **Framework:** Next.js (v16+) & React (v19+)
- **Linguagem/Ambiente:** Node.js
- **Banco de Dados:** PostgreSQL
- **Testes:** Jest, Faker.js
- **Infra/DevOps:** Docker, Docker Compose
- **Ferramentas:** SWR, Nodemailer, UUID, Async-Retry

## CI/CD (GitHub Actions)

O projeto já conta com workflows automatizados para garantir a estabilidade do código em cada Pull Request:

- **Automated Tests:** Execução automática da suite de testes com **Jest** em ambiente Ubuntu.
- **Linting:** Verificação de padrões de código e boas práticas (**ESLint/Prettier**).

---

## Roadmap

- [x] Estrutura Base MVC & API First.
- [x] Migrations & Schema PostgreSQL.
- [x] Autenticação (Session/Cookies/Bcrypt).
- [x] Testes de Integração.
- [ ] Sistema de Autorização por Roles. (Em Desenvolvimento)
- [ ] Interface de Login e Cadastro. (Em Desenvolvimento)

## Valor para o Negócio (Value Proposition)

1.  **Time-to-Market:** Redução drástica no tempo de desenvolvimento inicial.
2.  **Segurança por Design:** Boas práticas de segurança em autenticação e armazenamento de dados desde o primeiro commit.
3.  **Escalabilidade:** Estrutura preparada para crescer, com banco de dados versionado e código altamente testável.

---

## Como utilizar

### Pré-requisitos

- Node.js instalado

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/goncalvescrs/template-saas.git
   ```

2. Instale as dependências:

```bash
  npm install
```

3. Inicie o ambiente de desenvolvimento:
   Este comando (configurado via scripts do NPM) irá subir os containers Docker (Postgres), aguardar o banco estar pronto, rodar as migrations e iniciar o Next.js:

```bash
npm run dev
```

4. Rodando os Testes:
   Para rodar a suíte de testes (com o banco de dados de teste subindo automaticamente):

```bash
npm run test
```

Para rodar os testes em modo watch (desenvolvimento contínuo): `npm run test:watch`

### Scripts Disponíveis (package.json)

- `npm run dev`: Sobe os serviços locais, roda as migrations e inicia o servidor Next.js.
- `npm run test`: Executa os testes automatizados com o Jest rodando em paralelo com a aplicação.
- `npm run test:watch`: Roda os testes observando as mudanças nos arquivos.
- `npm run services:up`: Inicia os containers do Docker Compose em background.
- `npm run services:stop`: Para os containers do Docker.
- `npm run services:down`: Derruba os containers e remove as redes criadas.
- `npm run migrations:create`: Cria um novo arquivo de migration em infra/migrations.
- `npm run migrations:up`: Aplica as migrations pendentes no banco de dados de desenvolvimento.
- `npm run lint:prettier:check`: Verifica a formatação do código.
- `npm run lint:eslint:check`: Verifica os padrões do código com ESLint.

---

## Licença

Este projeto está sob a licença **MIT**.
