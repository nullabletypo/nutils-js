import { or } from '../src/or'
import { isString, isNull, isNumber } from '../src/lang'

test('or', () => {
  const pred = or(isString, isNumber, isNull)
  expect(pred('')).toBe(true)
  expect(pred(1)).toBe(true)
  expect(pred(null)).toBe(true)
  expect(pred(undefined)).toBe(false)
  expect(pred({})).toBe(false)
})
