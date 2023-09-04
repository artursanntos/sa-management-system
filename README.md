<p align="center">
  Esta aplicação foi feita utilizando NestJs
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="50" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>

</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Aplicação que utiliza o framework [Nest](https://github.com/nestjs/nest) com typescript para desenvolver um ambiente de gerenciamento de um site de ecommerce (Super Athlete). Criado para o Visagio Rocket Lab.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Preparar banco de dados

Como o site é apenas um experimento, o banco de dados que usei nos testes está disponível aqui. Para usá-lo, basta criar um arquivo .env na pasta raiz do projeto contento apenas:

```typescript
DATABASE_URL="file:./dev.db"
```

## Funcionalidades do banco

O banco possui 6 ações possíveis:

1. Criar produto: ação Post que fica na rota ```/produto```. Deve ser enviado um JSON do tipo CreateProdutoDTO.
3. Deletar produto: ação Delete que fica na rota ```/produto/id```, onde id é o id do produto a ser excluído. 
5. Atualizar produto: ação Put que fica na rota ```/produto/id```, onde id é o id do produto. Além disso, deve ser enviado um JSON do tipo UpdateProdutoDTO.
6. Encontrar um produto: ação Get que fica na rota ```/produto/id```, onde id é o id do produto.
7. Mostrar todos os produtos: ação Get que fica na rota ```/produto```
8. Comprar um produto: ação Patch que fica na rota ```/produto/id```, onde id é o id do produto. Nesta ação, a quantidade do produto é subtraída do estoque.

## Test (não disponíveis por enquanto)

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
