import { entries } from '../src/entries'

test('entries', () => {
  const result = entries({ a: 1, b: 2 })
  expect(result).toHaveLength(2)
  expect(result).toContainEqual(['a', 1])
  expect(result).toContainEqual(['b', 2])
})
