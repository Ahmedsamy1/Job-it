FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli@6.1.1

COPY . .

EXPOSE 4200

CMD ["ng", "serve"]