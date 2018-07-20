import { constant } from '../src/constant'

test('constant', () => {
  const f = constant(1)
  expect(f(10)).toBe(1)
})
