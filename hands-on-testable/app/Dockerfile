FROM node:15-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i --only=prod

COPY . .

CMD node index.js