import { compact } from '../src/compact'

test('compact', () => {
  const arr = [0, 1, 2, 0, NaN, undefined, null, -0]
  const r = compact(arr)
  expect(r).toEqual([1, 2])
})
