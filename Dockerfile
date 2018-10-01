FROM node:8.12.0

ENV WEB_PORT=4000

WORKDIR /app
COPY . /app

RUN yarn

EXPOSE $WEB_PORT

CMD ["npm", "start"]
