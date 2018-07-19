import * as _ from '../src/index'

describe('hasOwn', () => {
  test('plain object', () => {
    const obj = { a: '' }
    expect(_.hasOwn(obj, 'a')).toBe(true)
    expect(_.hasOwn(obj, 'b')).toBe(false)
  })

  test('instance', () => {
    class Klass {
      prop = ''
      proto() {/*  */ }
    }

    expect(_.hasOwn(new Klass(), 'prop')).toBe(true)
    expect(_.hasOwn(new Klass(), 'proto')).toBe(false)
  })
})


describe('omit', () => {
  it('remove property form object with immutable', () => {
    const obj = { a: 'a', b: 'b', c: 'c' }
    expect(_.omit(obj, 'c')).toEqual({ a: 'a', b: 'b' })
    expect(_.omit(obj, ['a', 'c'])).toEqual({ b: 'b' })
    expect(obj).toEqual({ a: 'a', b: 'b', c: 'c' })
  })
})


test('omitBy', () => {
  const obj = { a: 1, b: 2, c: 3 }
  expect(_.omitBy(obj, v => v < 2)).toEqual({ b: 2, c: 3 })
  expect(obj).toEqual({ a: 1, b: 2, c: 3 })
})


describe('pick', () => {
  it('create object from picked props with immutable', () => {
    const obj = { a: 'a', b: 'b', c: 'c' }
    expect(_.pick(obj, 'a')).toEqual({ a: 'a' })
    expect(_.pick(obj, ['a', 'c'])).toEqual({ a: 'a', c: 'c' })
    expect(obj).toEqual({ a: 'a', b: 'b', c: 'c' })
  })
})


describe('keys', () => {
  it('polyfil Object.keys', () => {
    const obj = { a: 'A', b: 'B' }
    const r = _.keys(obj)
    expect(r).toHaveLength(2)
    expect(r).toContain('a')
    expect(r).toContain('b')
  })
})

describe('values', () => {
  it('polyfil of Object.values', () => {
    const obj = { a: 'A', b: 'B' }
    const r = _.values(obj)
    expect(r).toHaveLength(2)
    expect(r).toContain('A')
    expect(r).toContain('B')
  })
})


describe('entries', () => {
  it('polyfil of Object.entries', () => {
    const obj = { a: 'A', b: 'B' }
    const r = _.entries(obj)
    expect(r).toHaveLength(2)
    expect(r).toContainEqual(['a', 'A'])
    expect(r).toContainEqual(['b', 'B'])
  })
})


test('mapKeys', () => {
  const obj = { a: true, b: false }
  const r = _.mapKeys(obj, (v, k, src) => {
    expect(src).toBe(obj)
    return k + '!'
  })

  expect(r).toEqual({ 'a!': true, 'b!': false })
})

test('mapValues', () => {
  const obj = { a: true, b: false }
  const r = _.mapValues(obj, (v, k, src) => {
    expect(src).toBe(obj)
    return v ? 1 : 0
  })

  expect(r).toEqual({ a: 1, b: 0 })
})
