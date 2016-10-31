# `secure-sample`

> Secure, sequential (n, N) sampling without replacement

## Usage

```js
var sample = require('secure-sample')

sample(3, 10) // [0, 5, 9]

```

Random order sample:

```js
var sample = require('secure-sample')
var shuffle = require('secure-shuffle')

shuffle(sample(3, 10)) // [6, 2, 8]

```

## API

### `secureSample(sampleSize, populationSize)`

Will return an array with `sampleSize` number of unique samples from the uniform
distribution `[0, populationSize)` (`populationSize` exclusive). The samples
will be sequential, so you may want to shuffle them. See [Related](#related) for
relevant module.

`sampleSize` and `populationSize` must be safe integers. `sampleSize` must not be
larger than `populationSize`. If any of these conditions are violated, an error
will be thrown. Something like [`unassertify`](https://github.com/twada/unassertify)

## Install

```sh
npm install secure-shuffle
```

## Related

* [`secure-random-uniform`](https://github.com/emilbayes/secure-random-uniform): Generate secure, random, uniform integers, compensating for modulo bias
* [`secure-shuffle`](https://github.com/emilbayes/secure-shuffle): Shuffle an array using `secure-random-uniform` as the RNG

## Reference

[John D. Cook on Stack Overflow](http://stackoverflow.com/a/311716)

## License

[ISC](LICENSE.md)
