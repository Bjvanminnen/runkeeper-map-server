# runkeeper-map-server
proxy server for runkeeper-map (https://github.com/Bjvanminnen/runkeeper-map)

`npm run deploy` will deploy a new microservice using zeit's now. When this URL changes, it then needs to be added to `set-server-url.sh` in runkeeper-map

To update client, do `npm run build` in `runkeeper-map`, then copy build folder to `./client-dist`
