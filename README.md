# Installation

Clone this repo and go to express-typescript folder.
```
$ git clone https://github.com/Phoique/express-typescript.git
$ cd express-typescript
$ npm install or yarn install

```

### Enviroment variables

Create a file named ".env" in the root directory and fill its contents as follows.

```
PORT = 3000
NODE_ENV = development
SECRET_KEY = SECRET123
```

### Working in the development environment

```
$ npm run build or yarn run build
$ npm run copy-static-assets or yarn run copy-static-assets
$ npm run watch-ts or yarn run watch-ts
a new termial
$ npm run dev or yarn run dev

```

and go to [http://localhost:3000](http://localhost:3000)


### Working in the production environment

```
$ npm run build or yarn run build
$ npm run copy-static-assets or yarn run copy-static-assets
$ npm run dev or yarn run dev

```