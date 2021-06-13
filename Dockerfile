FROM node:14

COPY package*.json /app/

COPY src/ /app/src/

COPY test/ /app/test/

WORKDIR /app

RUN npm install

CMD ["npm", "test"]