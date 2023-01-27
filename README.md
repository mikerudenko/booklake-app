
## 🐟🎣🐠 App for finding fishing place and book it

First of all you need to install:

### `npm i -g firebase-tools`

Available scripts:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To install project dependencies run:

### 'npm run bootstrap'

---

For testing firebase functions purposes:
`export GOOGLE_APPLICATION_CREDENTIALS={path-to-service-account-file}/service-account.json`

(on Unix)
`set GOOGLE_APPLICATION_CREDENTIALS={path-to-service-account-file}/service-account.json`

(on Windows)

---

# Deploy

- set env (prod or dev)
- `make deploy`

Available firebase CLI commands:

`firebase use dev`
`firebase use prod`

Switches your env to dev/prod mode

---

## Important

- Functions env config can be set only manually through the console : `firebase functions:config:set env.mode="prod"`
- component with \*Field prefix belongs to final-form components

# Managing mono repo

## Setup the project

You can use one of these scripts to setup the project:

- `make bootstrap` will install all dependencies and build the project for you.
- `make clean` will remove all `node_modules` folder from packages.

## Commands

It must be executed from the `root` folder.

- `npm run bootstrap` will install all packages dependencies and link them all together.

- `npm run link` will `symlink` dependencies

- `npm run build` will execute `npm run lerna:build` command from each packages.

### ALL 3 COMMANDS ARE REQUIRED!!!

### Adding new packages

The file `lerna.json` contains all configurations related to lerna including the packages location.

#### Add a dependency to all projects

```
$ npx lerna add @booklake/new-module
```

#### Add to a specific package

```
$ npx lerna add @booklake/new-module --scope=homebase --scope=@design-system
```
