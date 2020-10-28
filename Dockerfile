FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . /usr/src/app

EXPOSE 9000

ENV PORT 9000

CMD [ "node", "server.js" ]