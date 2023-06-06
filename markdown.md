### 📝 Descrição projeto

Estudo sobre websocket, uma tecnologia que torna possível abrir uma sessão de comunicação interativa entre o navegador do usuário e um servidor. Com esse tipo de API você pode enviar/receber mensagens para um servidor orientado a eventos

### Sobre o projeto FRONTEND (CLIENT)

- O front-end abre uma conexão com a URL de WebSocket gerada pelo back-end e fica escutando a alteração do valores.

- A cada vez que um valor é gerado, ele é refletido na tela do front-end, mostrando o seu respectivo valor.

- Cada vez que o valor é alterado pelo back-end, o front-end verifica se aquele valor é igual a 1:
  - Se sim: ele exibirá o valor e fechará a conexão com o back-end.
  - Se não: ele exibirá o valor na tela e deixará a conexão aberta.

### Sobre o projeto BACKEND (SERVER)

- No começo da função, declaramos um contador (count) com valor inicial de 0.

- Temos um setInterval que é executado a cada 1 segundo.

- Quando o setInterval é executado, ele verifica se o valor de count é igual a 3.

  - Se sim: Ele retorna e passa o valor fixo 1.
  - Se não: Ele continua o método e gera um número aleatório e incrementa a variável count(count++).

### 💻 Pré-requisitos

- [Nodejs][Node-url]
- [React][React-url]

## ❗ Instalando webScoket

- Primeiro, iremos baixar as dependências do frontend (client).

  - No terminal, navegue até a pasta "client"
    ```
    cd client
    ```
  - Em seguida, execute o comando "yarn" ou "npm install" para instalar as dependências:
    ```
    yarn install ou npm install
    ```

- Depois, iremos baixar as dependências do backend (server).
  - No terminal, navegue até a pasta "server"
    ```
    cd server
    ```
  - Em seguida, execute o comando "yarn" ou "npm install" para instalar as dependências:
    ```
    yarn install ou npm install
    ```

## 🚀 Tecnologias usadas no projeto.

[![Next][Next.js]][Next-url] [![React][React.js]][React-url] [![NodeJS][Node.js]][Node-url]

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en/
[Javascript-js]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
