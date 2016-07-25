FROM node:4.4.7

RUN mkdir -p /app
WORKDIR /app
COPY . /app

#RUN npm install

EXPOSE 8080

#ENTRYPOINT ["node", "server.js"]
