import { conforms } from '../src/conforms'
import { isNumber, isString } from '../src/lang'

test('conforms', () => {
  const isRecord = conforms({
    a: isNumber,
    b: isString,
    c: conforms({
      d: isNumber,
    }),
  })

  expect(isRecord({})).toBe(false)
  expect(isRecord(null)).toBe(false)
  expect(isRecord(undefined)).toBe(false)
  expect(isRecord({ a: 1, b: '' })).toBe(false)
  expect(isRecord({ a: 1, b: '', c: { d: 1 } })).toBe(true)
})
