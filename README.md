# typescript-primer

Minimalist boiler plate for Typescript/VSCode project for a productive environment.

## Pre-requisites

```
npm -v
6.9.0

node --version
v10.15.0
```

## Install

```sh
git clone https://github.com/agonzalezjr/typescript-primer.git
cd typescript-primer
npm i
code . # open VSCode
```

## Usage from CLI

```sh
npm start     # runs index.ts
npm test      # runs all unit tests
```

## Usage from VSCode

### Debug/Run

To Debug the main code, use the `Launch` command or `F5`.

### Debug tests

Install the [Mocha sidebar extension](https://marketplace.visualstudio.com/items?itemName=maty.vscode-mocha-sidebar) to debug and run tests right from VSCode.

![ms](mocha-sidebar.png)

### TDD

Install the [Node TDD extension](https://marketplace.visualstudio.com/items?itemName=prashaantt.node-tdd). Your code will be built/tested automatically whenever project is saved.

![nt](node-tdd.png)

You can easily get these extensions with the **Extensions: Show Recommended Extensions** command in VSCode.

## Project structure

```
src/          -> put TS code here
src/index.ts  -> main
test/         -> put TS tests here

dist/         -> compiled JS code will be here
test-report/  -> test report will be here
```
