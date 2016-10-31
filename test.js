'use strict'

var test = require('tape')
var sample = require('.')

test('edge cases', function (assert) {
  monotone(sample(0, 0), 0, 0)
  monotone(sample(1, 1), 1, 1)
  monotone(sample(2, 2), 2, 2)
  monotone(sample(1, 2), 1, 2)
  monotone(sample(5, 10), 5, 10)
  assert.throws(function () {
    sample(1, 0)
  })
  assert.throws(function () {
    sample(10, Number.MAX_SAFE_INTEGER + 1)
  })
  assert.throws(function () {
    sample(Number.MAX_SAFE_INTEGER + 1, Number.MAX_SAFE_INTEGER + 2)
  })
  assert.end()

  function monotone (arr, samples, max) {
    assert.ok(Array.isArray(arr), 'is array')
    assert.ok(arr.length === samples, 'exact number of samples')
    if (arr.length < 1) return

    var last = arr.slice(1).reduce(function (prev, cur) {
      assert.ok(prev < cur, 'must be monotonically increasing')
      return cur
    }, arr[0])

    assert.ok(last < max, 'must be strict less than max')
  }
})
