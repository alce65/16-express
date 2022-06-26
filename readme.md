# Http Server with Node & Express

## Objetivo

-   Configurar un proyecto npm con [**Node**](https://nodejs.org/en/), [**Express**](https://expressjs.com/), [**Typescript**](https://www.typescriptlang.org/), [**ESLint**](https://eslint.org/), [**Prettier**](https://prettier.io/), [**EditorConfig**](https://editorconfig.org/) y [**Jest**](https://jestjs.io/)

    -   Para todos los casos se emplearán **módulos nativos de ES6**
        -   package.json define `type="module"`
    -   ESLint utiliza
        -   un plugin, eslint-plugin-import, para configurar ES Modules
        -   el conjunto de reglas "eslint:recommended"
        -   el plugin y las reglas para prettier
        -   el plugin con el parser de Typescript
    -   Typescript define en tsconfig
        -   `"target"` y `"module"`: `"ESNext"`
        -   `"moduleResolution"`: `"node"`
        -   `"rootDir"`: `"./src"` y `"outDir"`: `"./dist"`
    -   Jest
        -   Jest utiliza un plugin de Babel para configurar ES Modules
        -   Define el `roots`: `<rootDir>/dist/` para testear directamente el JS compilado
        -   En el `env` de ESLint se define `jest` como true

-   Definir los **comandos de npm** necesarios para

    -   compilar
    -   ejecutar, utilizando **Nodemon**
    -   testear. En este caso, la estrategia empleada es compilar primero y testear el resultado en JS
    -   compilar + ejecutar, combinados en paralelo gracias a `npm-run-all`

-   Crear una aplicación básica con **express**

    -   Definir un puerto configurable por variables de entorno
    -   Instanciar la **aplicación** express
    -   Añadir los **middleware** más habituales (Morgan, Express.json)
    -   Terminar con un **listen** (`app.listen`) al puerto configurado, que incluya en su callback un mensaje por consola

-   Definir un endpoin home (/) con los métodos get y post

    -   get lee datos de un fichero
    -   post escribe datos en un fichero

-   Definir un endpoint tasks (/tasks) con todos los métodos de un CRUD
    -   get(/tasks)
    -   get(/tasks:/:id)
    -   post(/tasks)
    -   patch(/tasks:/:id)
    -   delete(/tasks:/:id)

Todos ellos gestionarán la información utilizando únicamente un array en memoria.

Para comprobar el funcionamiento de los endpoint se utilizarán herramientas como

-   postman
-   plugins de VSC: Rest Client o Thunder Client

> Se deja para el challenge dddel día 2 añadirle persistencia mediante un fichero json, creando un servidor similar en su funcionamiento a json-server

## Dependencias

-   _ESLint_
    -   `eslint`
    -   (eslint-config-airbnb-base)
    -   `eslint-plugin-import`
    -   `eslint-config-prettier`
-   _Jest_
    -   `jest` / `@types/jest`
    -   `@babel/plugin-transform-modules-commonjs`
-   _Typescript_
    -   `typescript`
    -   `@typescript-eslint/eslint-plugin`
    -   `@typescript-eslint/parser`
-   _Node_
    -   `@types/node`
    -   `npm-run-all`
    -   `nodemon`
    -   `cross-env`
    -   `inquirer` / `@types/inquirer`
-   _Express_
    -   `express` / `@types/express`
    -   `morgan` / `@types/morgan`
