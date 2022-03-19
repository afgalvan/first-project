FROM node:16-alpine3.15

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .

EXPOSE 4000

ENTRYPOINT  [ "npm", "run" ]
