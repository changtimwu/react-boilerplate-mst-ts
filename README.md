[![CircleCI](https://circleci.com/gh/changtimwu/react-boilerplate-mst-ts/tree/web3.svg?style=svg)](https://circleci.com/gh/changtimwu/react-boilerplate-mst-ts/tree/web3)

## first time setup
```
yarn install
yarn patchweb3
```

## development
```
yarn start
```

## web3.js
You might be curious the ugly `patchweb3` task.

The official TS typing of web3.js is terrible.  Typing overriding through `"include"` in `tsconfig.json` works however it
conflict with react's hot reload. This issus is discussed here(https://github.com/wmonk/create-react-app-typescript/issues/245)

## How was this created
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

initialied with
```
create-react-app react-boilerplate-mst-ts --scripts-version=react-scripts-ts
```
