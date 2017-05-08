# Select random item from plain object or array-like one.

The package contains fast random int generator in its core, based on bitwise shift. Another fully Math.random-based alternatives (e.g. lodash.random) are ~4-5 times slower:

```
// Chance to get number 3 in range 1-10 for 10000 iterations (average values of 100 sequential tests) 
bitwise-shift: 9.99%
bitwise-shift: 16.621ms
lodash: 9.96%
lodash: 75.952ms
```

## Install

```
$ npm i -S select-random
```
or
```
$ yarn add select-random
```

## Use

```
selectRandom({one: 1, two: 2, three: 3})
selectRandom([1, 2, 3])
```
