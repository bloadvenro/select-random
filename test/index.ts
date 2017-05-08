import values = require('lodash.values')
import { assert } from 'chai'
import selectRandom from '../lib/selectRandom'

describe('Select random property value from object literal.', () =>
{
  it('Should return a value', () =>
  {
    const o = {
      'one': 1,
      'two': 2,
      'three': 3,
    }

    assert.include(values(o), selectRandom(o))
  })
})

describe('Select random property value from array.', () =>
{
  it('Should return a value', () =>
  {
    const a = [1,2,3]
    assert.include(a, selectRandom(a))
  })
})

describe('Passing wrong argument data type.', () =>
{
  it('Should throw.', () =>
  {
    assert.throws(() => selectRandom(1), Error)
  })
})
