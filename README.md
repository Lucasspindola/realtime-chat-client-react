# realtime chat server

Deploy:

https://realtime-chat-client-react.vercel.app/login

Documentação:

https://documentation-api-chat-node-ts.vercel.app/

url-base(api):

https://chatroom-api-deploy.onrender.com/

link repositorio back end:
https://github.com/Lucasspindola/realtime-chat-server-node

##

[ Voltar para o topo ](#tabela-de-conteúdos)

### INSTALAÇÃO

UTILIZAR LOCALMENTE-

Clone o projeto em sua máquina na branch ** develop **, na shel entre na pasta criada "realtime-chat-client-react" e dentro dela instale as dependências com o comando:

```
yarn

(Nesse momento vai ser criado uma pasta chamada node_modules dentro da realtime-chat-client-react)

```

Rode o projeto com o comando dentro da pasta realtime-chat-cliente-react:

```
yarn dev

Entre no link retornado pelo servidor.
(http://localhost:5173/)

```

Agora você deve estar na pagina de login, o front end está funcionando. Mas falta configurarmos o back-end.

---

BACK-END

Agora e preciso entrar no repositorio de back-end, para fazer o clone.

https://github.com/Lucasspindola/realtime-chat-server-node

Clone o projeto em sua máquina entre na pasta do projeto realtime-chat-server-node na branch principal ** master ** e instale as dependências com o comando:

```shell
yarn
```

### Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

E necessario criar um novo banco de dados postgres.

**Agora que já foi criado o banco de dados configure as variáveis de ambiente no seu .env**, passando as credenciais corretas para conectar em seu banco local

### 3.3 Conectando database

Não esquecer de rodar as migrações existentes para criar as tabelas com o comando a baixo.

Comando:

yarn typeorm migration:run -d src/data-source

Com isso feito, para rodar sua aplicação, basta utilizar o comando

```
yarn dev
```

```

```

Agora com o back end e front end rodando simultaneamente, o front end deve funcionar...
