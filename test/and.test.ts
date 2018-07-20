import { and } from '../src/and'
import { conforms } from '../src/conforms'
import { isNumber, isString } from '../src/lang'

test('and', () => {
  const hasNumId = conforms({ id: isNumber })
  const hasStrContent = conforms({ content: isString })
  const f = and(hasNumId, hasStrContent)

  expect(f({ id: 1, content: '' })).toBe(true)
  expect(f({ id: 1 })).toBe(false)
  expect(f({ id: 1, content: 1 })).toBe(false)
  expect(f({})).toBe(false)
})
