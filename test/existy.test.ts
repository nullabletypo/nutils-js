import { existy } from '../src/existy'

test('existy', () => {
  expect(existy(1)).toBe(true)
  expect(existy(undefined)).toBe(false)
  expect(existy(null)).toBe(false)
})
