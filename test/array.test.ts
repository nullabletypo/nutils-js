import * as _ from '../src/index'
import isEqual = require('lodash.isequal')

describe('contains', () => {
  it('return true when element is included', () => {
    expect(_.contains([1, 2, 3], 2)).toBe(true)
  })

  it('return false when element is not included', () => {
    expect(_.contains([1, 2], 3)).toBe(false)
  })

  test('with comparator', () => {
    const arr = [{ id: 1 }, { id: 2 }, { id: 3 }]

    expect(_.contains(arr, { id: 1 }, isEqual)).toBe(true)
    expect(_.contains(arr, { id: 4 }, isEqual)).toBe(false)
  })

  test('alias', () => {
    expect(_.incluedes([1, 2], 3)).toBe(false)
  })
})

describe('unique', () => {
  it('return non-duplicated array', () => {
    const arr = [1, 2, 2, 3, 3]
    expect(_.unique(arr)).toEqual([1, 2, 3])
  })

  test('with comparator', () => {
    const arr = [{ id: 1 }, { id: 2 }, { id: 2 }]
    expect(_.unique(arr, isEqual)).toEqual([{ id: 1 }, { id: 2 }])
  })
})

describe('intersection', () => {
  it('return a & b', () => {
    const a = [1, 2, 3, 4]
    const b = [3, 4, 5, 6]
    expect(_.intersection(a, b)).toEqual([3, 4])
  })

  test('with comparator', () => {
    const a1 = [{ id: 1 }, { id: 2 }, { id: 3 }]
    const a2 = [{ id: 3 }, { id: 4 }, { id: 5 }]
    expect(_.intersection(a1, a2, isEqual)).toEqual([{ id: 3 }])
  })
})

describe('defference', () => {
  it('retrun defference of array (a - b)', () => {
    const a = [1, 2, 3, 4]
    const b = [3, 4, 5, 6]
    expect(_.difference(a, b)).toEqual([1, 2])
  })

  test('with comparator', () => {
    const a1 = [{ id: 1 }, { id: 2 }, { id: 3 }]
    const a2 = [{ id: 3 }, { id: 4 }, { id: 5 }]
    expect(_.difference(a1, a2, isEqual)).toEqual([{ id: 1 }, { id: 2 }])
  })
})


describe('makeHashGroup', () => {
  it('create hash from array of object', () => {
    const arr = [{ id: 1 }, { id: 2 }, { id: 3 }]
    expect(_.makeHashGroup(arr, 'id')).toEqual({ 1: { id: 1 }, 2: { id: 2 }, 3: { id: 3 } })
  })
})


describe('range', () => {
  test('1 argument', () => {
    expect(_.range(3)).toEqual([0, 1, 2, 3])
    expect(_.range(0)).toEqual([0])
    expect(_.range(-3)).toEqual([0, -1, -2, -3])
  })

  test('2 arguments', () => {
    expect(_.range(1, 3)).toEqual([1, 2, 3])
    expect(_.range(0, 0)).toEqual([0])
    expect(_.range(-1, 1)).toEqual([-1, 0, 1])
    expect(_.range(1, -1)).toEqual([1, 0, -1])
    expect(_.range(-1, -3)).toEqual([-1, -2, -3])
  })

  test('3 arguments', () => {
    expect(_.range(0, 6, 2)).toEqual([0, 2, 4, 6])
    expect(_.range(0, 6, -2)).toEqual([0, 2, 4, 6])
    expect(_.range(0, 0, 2)).toEqual([0])
    expect(_.range(0, 0, 0)).toEqual([0])
    expect(_.range(1, 5, 3)).toEqual([1, 4])
    expect(_.range(0, -6, 2)).toEqual([0, -2, -4, -6])
    expect(_.range(0, -6, -2)).toEqual([0, -2, -4, -6])
  })
})

describe('compact', () => {
  it('create an array removed falsy value', () => {
    const arr = [0, 1, 2, 0, NaN, undefined, null, -0]
    const r = _.compact(arr)
    expect(r).toEqual([1, 2])
  })
})

describe('flatten', () => {
  const arr = [1, [[2, 3, 4]], 5]

  it('return flatten array', () => {
    const r = _.flatten(arr)
    expect(r).toEqual([1, 2, 3, 4, 5])
  })

  it('is be able to use mapper function', () => {
    const mapper = (x: number) => x + 1
    const r = _.flatten(arr, mapper)
    expect(r).toEqual([2, 3, 4, 5, 6])
  })
})
