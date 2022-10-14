
# Teste técnico Allugator

Primeira etapa do processo seletivo, com o objetivo de demosntrar minhas habilidades com as stacks que são utilizadas pela Allugator por meio de um desafio técnico.
## Configurações iniciais

1 - Clone o repositório
 - Use o comando: git clone git@github.com:josealexandre301428/Teste-tecnico-Allugator.git
 - Entre na pasta do repositório que você acabou de clonar:
    - `cd Teste-tecnico-Allugator`
2 - Instale as dependências
 - Para isso, use o seguinte comando na raiz do projeto e separadamente dentro de cada pasta(Front e Back-end):
     - `npm install`
3- para rodar o Back-end
- Para rodar somento o back end no seu editor, basta entrar no diretorio de back end( `cd back-end`) e utilizar um dos comandos abaixo:
     - `npm start`  rodara a aplicaçao fora do nodemon.
     - `npm run dev` - rodara a api em ambiente nodemon, onde facilitara a identificaçao de bugs.

     - caso precise resetar o banco de dados, basta utilisar o comando `npm run db:resert` na raiz de back-end.

4 - rodando a aplicação! 
- Para rodar a aplicação completa no browser (Fron e Back end) basta usar o comando abaixo na raiz do projeto.
    - `npm start`
## Banco de dados e Sequelize

Para o banco de dados, utilizaremos o ORM Sequelize, que fará interface com o MySQL.


- O [Diagrama de ER](./assets/readme/eer.png) também pode ajudar a "visualizar" o banco de dados;
- Respeite a estrutura do banco de dados, ou seja, sua implementação não deve adicionar ou remover tabelas, campos ou relacionamentos e sua API deve estar preparada para aproveitar essa estrutura por completo.
## Scripts relevantes do package.json

São os scripts da raiz do projeto (./package.json) e não das aplicações individuais ./front-end/package.json e ./back-end/package.json:

 - `start`: Limpa as portas 3000 e 3001 e simula a inicialização no avaliador. Também prepara o campo rodando o Sequelize para restaurar o banco de dados de testes (final -test) e sobe a aplicação com pm2 em modo fork (uma instância para cada aplicação). Nesse modo, as alterações não são assistidas;

     - uso (na raiz do projeto): `npm start`
- `stop`: Para e deleta as aplicações rodando no `pm2`;

    - uso (na raiz do projeto): `npm stop`
- `dev`: Limpa as portas 3000 e 3001 e sobe a aplicação com pm2 em modo fork (uma instância pra cada aplicação). Nesse modo, as atualizações são assistidas (modo watch);

    - uso (na raiz do projeto): `npm run dev`
- `dev:prestart`: A partir da raiz, esse comando faz o processo de instalação de dependências (npm i) nos dois projetos (./front-end e ./back-end) e roda o Sequelize no ./back-end (lembrar de configurar o .env no mesmo);

    - uso (na raiz do projeto): `npm run dev:prestart`
- `db:reset`: Roda os scripts do Sequelize restaurando o banco de dados de desenvolvimento (final -dev). Utilize esse script caso ocorra algum problema no seu banco local;

    - uso (na raiz do projeto): `npm run db:reset`
## Documentação da API

#### Login

```http
  POST /login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Email`, `Senha` | `string` | Valida no banco de dados a existencia do usuario|

#### Registrar novo usuario 

```http
  POST /register
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Nome, Email e Senha` | `string` | Registra um novo usuario no Banco de dados |


#### Retornar todos os produtos

```http
  GET /products
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Nenhum` | `string` | Retorna todos os produtos do Banco de dados |


```http
  GET /products/one
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome do produto` | `string` | Retorna o produto especifico do Banco de dados |

```http
  GET /signature
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `ID do usuario` | `string` | Retorna todas as assinaturas referentes ao usuario |

```http
  POST /signature/newSig
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
|`userId`| `number`| Retorna todas as assinaturas referentes ao usuario |
|`totalPrice`| `number`| 
|`deliveryAddress`| `string` |
|`deliveryNumber`| `number`|
|`document`| `string`|
|`cartItems` | `array de objetos` | 


```http
  DELETE /signature/delet/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `ID da assinatura` | `string` | apaga assinatura referente ao ID|



## Stack utilizada

 - **Front-end:** React, Bootstrap, reactStrap, axios, eslint, StyleLint.
 - **Back-end:** Node, Express, JWT, cors, chai, mocha, Joi.


## Autores

- [@josealexandre301428](https://www.github.com/josealexandre301428)


## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio de jasspfilho@gmail.com

