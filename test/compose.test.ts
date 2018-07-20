import { compose } from '../src/compose'

const add = (a: number, b: number) => a + b
const square = (n: number) => n * n
const toString = (s: number) => s + ''

test('compose', () => {
  const f = compose(add, square, toString)
  expect(f(2, 2)).toBe('16')
})

test('compose.right', () => {
  const f = compose.right(toString, square, add)
  expect(f(2, 2)).toBe('16')
})
