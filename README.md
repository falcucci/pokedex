<h1 align="center">Pokedex Service</h1>

<p align="center">A project to consume pokemon info.</p> 


___
[![Run in Postman](https://run.pstmn.io/button.svg)](https://api.postman.com/collections/3410852-47bdc30e-6c81-4084-ab8b-cb3ae29e8c82?access_key=PMAT-01GJG5GYFA5NGWGVAFKCW1GN53)

Live Example: https://pokedex-falcucci.vercel.app

Running the service requires some dependencies.

1. Docker or Docker Compose installed. [Install instructions.](https://docs.docker.com/get-docker/)

## Running the service

```bash
docker-compose up -d --build
```

| name | description |
| ---- | ----------- |
| `POKE_API_URL`  | poke api endpoint |
| `FUNTRANSLATIONS_API_URL`   | fun translations endpoint |

install the dependencies

```bash
npm i
```

Or, run the development server by yourself to check better logs:
```bash
npm run dev
```

Go to http://localhost:3000 to access the serveless functions

Serveless functions are running at https://pokedex-falcucci.vercel.app/api/health

check it out the functions.
```bash
curl --location --request GET 'https://pokedex-falcucci.vercel.app/api/health'
```

GET pokemon by name
```bash
curl --location --request GET 'https://pokedex-falcucci.vercel.app/api/pokemon/ditto'
```

GET legendary pokemon by name

```bash
curl --location --request GET 'https://pokedex-falcucci.vercel.app/api/pokemon/mewtwo'
```

GET pokemon by name legendary translated
```bash
curl --location --request GET 'https://pokedex-falcucci.vercel.app/api/pokemon/translated/mewtwo'
```

## Deploy It Yourself 🎉

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/falcucci/pokedex)


#### The Node Way&trade;

> "When applications are done well, they are just the really application-specific, brackish residue that can't be so easily abstracted away. All the nice, reusable components sublimate away onto github and npm where everybody can collaborate to advance the commons."

![node.js is shiny](https://feross.net/x/node2.gif)
