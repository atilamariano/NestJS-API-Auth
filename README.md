# NestJS-API-Auth

Este é um projeto baseado em NestJS que utiliza Prisma ORM para interagir com o banco de dados e inclui autenticação e login para usuários.

## Requisitos:

Node.js

`npm` ou `yarn` instalado

## 1 Instalação:

#### Clone este repositório em sua máquina local:

`git clone https://github.com/atilamariano/NestJS-API-Auth`

## 2 Instale as dependências:

`cd seu-projeto`

`npm install`

Configure o arquivo `.env` com as variáveis de ambiente necessárias:

```
DATABASE_URL=postgres://usuario:senha@localhost:5432/banco-de-dados
JWT_SECRET=seu-segredo
```

Substitua usuario, senha e banco-de-dados pelos seus próprios valores.

## 3 Execute as migrações do banco de dados:

`npm run prisma:migrate`

## 4 Inicie o servidor:

`npm run start:dev`

Copie e cole o inderço no seu navegador para abrir o Swagger com a doc da API:

`http://localhost:3333/api`

### Utilização

#### Endpoint para registro de usuários:

POST /auth/register

#### Payload:

```
{
  "email": "email@example.com",
  "password": "sua-senha"
}
```

#### Endpoint para login de usuários:

POST /auth/login

#### Payload:

```
{
  "email": "email@example.com",
  "password": "sua-senha"
}
```

O resultado será um token JWT válido por 24 horas.

#### Endpoint protegido por autenticação:

GET /protected

Para acessar esse endpoint, inclua o token JWT no header Authorization com o valor Bearer <token>.

### Projeto criado apenas para estudos,  Autor: Átila Mariano Dev.
