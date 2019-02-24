import { difference } from '../src/difference'

test('primitive', () => {
  const a = [1, 2, 3, 4]
  const b = [3, 4, 5, 6]
  expect(difference(a, b)).toEqual([1, 2])
})

test('object', () => {
  const a = [{ id: 1 }, { id: 2 }]
  const b = [{ id: 1 }, { id: 3 }]
  const r1 = difference(a, b, el => String(el.id))
  const r2 = difference(a, b)
  expect(r1).toEqual([{ id: 2 }])
  expect(r2).toEqual([{ id: 1 }, { id: 2 }])
})
