FROM node:16-alpine3.15

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 4000

ENTRYPOINT  [ "npm", "run" ]
