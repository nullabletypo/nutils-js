import { set } from '../src/set'

test('set', () => {
  const src = { a: 1 }
  const result = set(src, 'a', 2)
  expect(result).toBe(src)
  expect(result).toEqual({ a: 2 })
})
