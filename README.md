# @newkind/tests

## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
    - [Install](#install)
- [License](#license)

## Getting Started

It is librari for easy to use test of mocha.js devTool eruda and events bus for uour projects 

### Install

Installing `@newkind/tests` with npm
```console
$ npm i @newkind/tests
```
Installing `@newkind/tests` with yarn
```console
$ yarn add @newkind/tests
```

#### Include modules
```textmate
    emoji
    isEmpty
    events
    assert
    expect
    should
```

#### example
```js
    import { tests, list, devTool } from './index.mjs'
    (async ()=>{
        let test = await list()
        await tests() // default demo tests
    })()
```

## License

*GNU GENERAL PUBLIC LICENSE version 3* by [Zababurin Sergey](https://raw.githubusercontent.com/zababurinsv/z-events/master/LICENSE) converted to Markdown. Read the [original GPL v3](http://www.gnu.org/licenses/).