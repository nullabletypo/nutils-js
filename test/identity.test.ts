import { identity } from '../src/identity'

test('identity', () => {
  expect(identity(1, 2, 3)).toBe(1)
})
