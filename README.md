# Reviews-service

> Review service component for Airbnb mockup

## Related Projects

  - https://github.com/hrr34-fec5/

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

   "start": "node server/server.js",
    "dev": "webpack --watch --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js",
    "db-init": "node database/seed.js",
    "test": "jest"

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Seeding Database
For testing and development purposes, you may find it helpful to seed a database.

After starting MongoDB and installing dependencies, run the seed script, `npm run db-init`.

# reviews-service
