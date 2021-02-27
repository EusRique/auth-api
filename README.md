[![Build Status](https://travis-ci.org/EusRique/auth-api.svg?branch=master)](https://travis-ci.org/EusRique/auth-api)
[![Coverage Status](https://coveralls.io/repos/github/EusRique/auth-api/badge.svg?branch=master)](https://coveralls.io/github/EusRique/auth-api?branch=master)

# **Auth API**

Desafio: API de autenticação.

## **Importante**

Verifique o arquivo env.ts para a configuração de variáveis de ambiente, altere se necessário.
Path: src/main/config/env.ts

## **Requerimentos**

- Node 13x
- MongoDB
- Docker

## **Depois de tudo configurando**

Instale as dependências do projeto rodando o seguinte comando no terminal.

`npm install`

Para iniciar a API execute o comando abaixo no terminal (Docker).

`npm run up`

Para derrubar a API execute o comando abaixo no terminal (Docker).

`npm run down`

Após a inicialização o sistema ficará disponível no endereço

`http://localhost:3000/api/`

Para rodar atualizações do código no container deve ser executado o comando abaixo

`tsc -w`

Para rodar os testes unitarios

`npm test:unit `

Teste Integração

`npm test:integration`

Testes Verbosos

`npm test`  
`npm test:verbose`

Test CI para toda vez que dor feito um push

`npm test:ci`

## **Abaixo os links para a documentação da API**

1. [Cadastro](./requirements/signup.md)
2. [Login](./requirements/login.md)

## Checklist:

- [x] Utilizado NodeJS
- [x] Utilizado MongoDB
- [x] Testes unitário;
- [x] Teste de integração;
- [x] Teste de CI/CD;
- [x] Autenticação por JWT;
- [x] Logs;
