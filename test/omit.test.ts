import { omit } from '../src/omit'

const src = { a: 1, b: 2, c: 3 }

test('omit', () => {
  expect(omit(src, 'a')).toEqual({ b: 2, c: 3 })
  expect(omit(src, ['a', 'c'])).toEqual({ b: 2 })
})

test('omit.by', () => {
  const result = omit.by(src, v => v > 2)
  expect(result).toEqual({ a: 1, b: 2 })
})
