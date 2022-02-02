

# Vitta NodeJS Backend


# Indice

- [📑 Sobre](#-sobre)
- [🚀 Tecnologias utilizadas](#-tecnologias-utilizadas)
- [📦 Como baixar e executar o projeto](#-como-baixar-o-projeto)
- [📓 Como utilizar](#-como-utilizar)

---

## 📑 Sobre

O projeto é uma api de cadastros de clientes, desenvolvido como desafio para empresa Groove Tech.

---

## 🚀 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias :

- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.dev/)
- [Express](https://expressjs.com/pt-br/)
- [Redis](https://redis.io/)
- [Axios](https://axios-http.com/docs/intro)

---
## 📓 Como utilizar
  Para utilizar a api você deve simular com [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).

  Primeiro, crie um arquivo ".env" na raiz do projeto e cole as envs descritas abaixo:
  ```
  ```

  Levante o redis pelo docker com as configurações padrões com os comandos abaixo:
  ```bash
  $ docker pull redis # Baixa a imagem do redis
  $ docker run -d -p 6379:6379 redis #Execute o redis em background e com a porta 6379 aberta para localhost
  ```

---

## 📦 Como baixar o projeto
```bash
    #Clonar o repositório
    $ git clone https://github.com/leogottardi/vitta-nodejs-backend.git

    # Entrar no diretório
    $ cd vitta-nodejs-backend

    # Instalar as dependencias
    $ npm install

    #Iniciar o projeto
    $ npm run dev

    # Testar o projeto
    $ npm run test
```
