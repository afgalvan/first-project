FROM node:16-alpine3.15

WORKDIR /app

# Add package.lock.json file
COPY ./package.json ./

RUN npm install

COPY . .

EXPOSE 4000

RUN npm run build

ENTRYPOINT  [ "npm", "run" ]
