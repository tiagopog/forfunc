FROM node:4.4.7

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home
ENV APP_PATH=$HOME/app
ENV LIB_PATH=$HOME/lib

RUN mkdir -p $APP_PATH &&\
    mkdir -p $LIB_PATH

WORKDIR $APP_PATH

COPY package.json $LIB_PATH

RUN chown -R app:app $HOME

USER app

RUN npm install --prefix $LIB_PATH --silent &&\
    npm install express --prefix $LIB_PATH --silent &&\
    npm install --prefix $LIB_PATH --save-dev nodemon --silent &&\
    npm cache clean &&\
    ln -s $LIB_PATH/node_modules/ node_modules

EXPOSE 3000

CMD ["node_modules/.bin/nodemon", "config/server.js"]
