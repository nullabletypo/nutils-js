import { mapValues } from '../src/mapValues'

test('mapValues', () => {
  const obj = { a: true, b: false }
  const r = mapValues(obj, (v, _k, src) => {
    expect(src).toBe(obj)
    return v ? 1 : 0
  })

  expect(r).toEqual({ a: 1, b: 0 })
})
