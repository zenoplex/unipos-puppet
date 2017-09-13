# unipos-puppet

## Quick start

This project requires Node 8.4.0 or later (but should work with any 6.x or newer release) and Yarn. Make sure you have those installed.
Then just type following commands:

```
git clone https://github.com/zenoplex/unipos-puppet
cd unipos-puppet
yarn
```

## Available scripts

Run using `npm run <script>` command.

+ `clean` - remove transpiled files,
+ `lint` - lint source files and tests,
+ `typecheck` - check type annotations,
+ `test` - lint, typecheck and run tests with coverage,
+ `test:watch` - interactive watch mode to automatically re-run tests, 
+ `build` - compile source files,
+ `build:watch` - interactive watch mode, compile sources on change,
+ `start` - run src with node -r babel-register,
+ `start:heroku` - start server with tranpiled files. 

## Environment variables

+ `AUTH` - basic auth id:password.  No basic auth if not set.
