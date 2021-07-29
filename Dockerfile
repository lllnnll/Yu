FROM node:16.5.0

WORKDIR /usr/src/bot

COPY package.json .

RUN npm install

COPY . .

CMD [ "node", "src/index.js" ]