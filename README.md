<h1 align="center"> AgroValor </h1>

## 📄 Descrição do projeto

O sistema de caderno de campo digital a ser desenvolvido neste projeto irá permitir a gestão online da produção, e despesas de seus lotes agricolas, gerando um relátorio de lucratividade, e histórico dos lotes para análise,permitindo assim que os produtores economizem tempo lidando com papelada, sejam mais ágeis ao tomar decisões, e ter conhecimento real da lucratividade de suas culturas e lotes.

## 🛠 Funcionalidades do Projeto

- Cadastro de Usuários

- Criar, editar e adicionar propriedades

- Criar, editar e adicionar Lotes em produção

- Criar, editar e adicionar Despesas

- Criar, editar e adicionar Produção

- Gerar relatório de Produção e Despesa

## 🚩 Requisitos

- Antes de iniciar deve ter o [NodeJS](https://nodejs.org/en/) instalado em sua máquina.
- Deve também instalar o [Docker](https://docs.docker.com/get-docker/).

## 💻 Como iniciar

- Para iniciar execute os seguintes comandos

- Clone o repositorio na sua máquina local.

```sh
git clone https://github.com/MateusFoppa/AgroValor-api.git
```

- Acesse a pasta clonada

```sh
cd AgroValor-api
```

- Rode o comando para instalar as dependências

```sh
npm install
```

- Criar arquivo .env com base em arquivo de exemplo, para configuração de variáveis de ambiente:

```sh
cp .env_example .env
```

- Crie o Container Docker rodando o banco de dados PostgresSQL

```sh
docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

- Rodar as migrações

```sh
npm run typeorm migration:run -- -d ./src/shared/infra/typeorm
```

- Inicie o servidor em desenvolvimento

```sh
npm run dev
```
- Inicie o vite em desenvolvimento

```sh
cd ./client
```

```sh
npm run dev
```
## ✅ Tecnologias usadas

- `Typescript`
- `Node.js`
- `React`

## 👨🏻‍💻 Desenvolvedor

[<img src="https://avatars.githubusercontent.com/u/55770663?s=400&u=0e958c3c73b150da48612bbe1e2de29c35e86e96&v=4"/>](https://github.com/MateusFoppa)
