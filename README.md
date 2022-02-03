

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

  Antes de tudo, crie um arquivo ".env" na raiz do projeto e cole as envs descritas abaixo:
  ```
  VITTA_SSO_BASE_URL=https://accounts.seguros.vitta.com.br/
  BASIC_AUTH=Y3VzdG9tZXJzOjQ1MzAwMGY3LTQ3YTAtNDQ4OS1iYzQ3LTg5MWM3NDI2NTBlMg==
  ```

  `Obs: O arquivo .env ja existe nesse repositório, confira se as informações presentes no arquivo são iguais as descritas acima.`

---
  Se possuir o docker-compose instalado, basta rodar o comando: `docker-compose up` para instalar as dependências e executar o projeto. Caso não tenha, ignore essa parte.

---
  Levante o redis pelo docker com as configurações padrões com os comandos abaixo:
  ```bash
  # Baixa a imagem do redis
  $ docker pull redis 

  # Execute o redis em background e com a porta 6379 aberta para localhost
  $ docker run -d -p 6379:6379 redis 
  ```
---
### 🔒 Autenticação
Todas as rotas precisam ser autenticadas via token JWT. Siga os passos da requisição abaixo para obter o token.

**Método:** `POST`

**Rota:** `https://accounts.seguros.vitta.com.br/auth/realms/careers/protocol/openid-connect/token`

**Header:** `Content-Type: application/x-www-form-urlencoded`

**Payload:** 
```
grant_type=client_credentials
client_id=customers
client_secret=453000f7-47a0-4489-bc47-891c742650e2
username=<seu_email>
password=<base64_de_seu_email>
scope=openid
```

**Resposta da requisição:**
```bash
{
"access_token": "<token>", # token a ser usado na autenticação
"expires_in": 300,
"refresh_expires_in": 0,
"token_type": "Bearer",
"not-before-policy": 0,
"scope": "openid profile email",
"Id_token": “...“
}
```
---

## Documentação das rotas
  Para acessar a documentação das rotas, siga os passos de [Como baixar e executar o projeto](#-como-baixar-o-projeto) e com o projeto em execução acesse a url: localhost:3333/api-docs


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
