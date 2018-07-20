import { contains } from '../src/contains'

test('contains', () => {
  expect(contains([1, 2, 3], 2)).toBe(true)
  expect(contains([1, 2], 3)).toBe(false)
  expect(contains([{ id: 1 }, { id: 2 }], { id: 1 }, (a, b) => a.id === b.id)).toBe(true)
})
