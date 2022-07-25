# MyMovie

# Configuração inicial

# Para rodar o servidor de APIs (srv-apis)

1. Executar, na pasta do servidor de APIs (srv-apis), o comando: npm install
2. Com o MongoDb rodando no servidor localhost porta 27017, executar, na pasta do servidor de APIs (srv-apis), o comando: node .\database\carregardb.js
3. Executar, na pasta do servidor, o comando: npm start
4. O servidor será iniciado em `http://localhost:3000/`.

# Para rodar o servidor web (srv-web)

1. Rodar, na pasta do servidor web (srv-web), o comando: npm install --legacy-peer-deps
2. Executar, na pasta do servidor, o comando: npm start
3. O servidor será iniciado em `http://localhost:4200/`.
