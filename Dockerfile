FROM node:latest

WORKDIR /app

COPY package*.json ./

npm install

COPY . .

CMD ["node","app.js"]

