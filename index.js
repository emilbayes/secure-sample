'use strict'

var assert = require('nanoassert')
var uniform = require('secure-random-uniform')

module.exports = function (sampleSize, populationSize) {
  assert(Number.isSafeInteger(sampleSize), 'sampleSize must be safe integer')
  assert(Number.isSafeInteger(populationSize), 'populationSize must be safe integer')
  assert(sampleSize <= populationSize, 'sampleSize can not be larger than populationSize')

  var samples = []

  var candidate = 0
  var samplesTaken = 0

  var rand
  while (samplesTaken < sampleSize) {
    rand = uniform(populationSize - candidate)

    if (rand >= sampleSize - samplesTaken) {
      candidate++
    } else {
      samplesTaken = samples.push(candidate++)
    }
  }

  return samples
}
