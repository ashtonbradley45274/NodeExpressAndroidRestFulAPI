# NodeExpressAndroidRestFulAPI
Customer Service API

## Starting the customer API
```sh
$ docker compose up -d  #The Mysql instance is powered by docker
$ npm install  #Installs all npm packages
$ node index.js #run application
```
## Stop Docker 
```sh
$ docker compose down
```

## How to Stop unscaled RestFul API
Ctrl+C in terminal

## Locally Scaling API Rest (Start)
```sh
$ node_modules/pm2/bin/pm2 start ecosystem.config.js
```

## Locally Scaling API Rest (Stop)
```sh
$ node_modules/pm2/bin/pm2 stop ecosystem.config.js

```
