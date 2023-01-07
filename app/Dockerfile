FROM node:16.14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE ${APP_PORT}

COPY . .

CMD ["npm","run", "dev"]
