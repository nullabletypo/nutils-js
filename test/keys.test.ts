import { keys } from '../src/keys'

test('keys', () => {
  const result = keys({ a: 1, b: 2 })
  expect(result).toContain('a')
  expect(result).toContain('b')
})
