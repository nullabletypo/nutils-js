import { mapKeys } from '../src/mapKeys'

test('mapKeys', () => {
  const obj = { a: true, b: false }
  const r = mapKeys(obj, (_v, k, src) => {
    expect(src).toBe(obj)
    return k + '!'
  })

  expect(r).toEqual({ 'a!': true, 'b!': false })
})
