# murmur2js

An optimized and minimal JavaScript implementation of the MurmurHash 2 algorithm.

This implementation has been largely taken from [Gary Court's implementation](https://github.com/garycourt/murmurhash-js)
and this was mostly just done to put this implementation on NPM.

## Installation

```bash
npm i --save murmur2js
```

## Usage

```js
var murmurHash = require('murmur2js');
console.log(murmurHash('abcd')); // 646393889
```
