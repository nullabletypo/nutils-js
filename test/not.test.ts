import { not } from '../src/not'
import { isString } from '../src/lang'

test('not', () => {
  const pred = not(isString)
  expect(pred('')).toBe(false)
  expect(pred(1)).toBe(true)
})
