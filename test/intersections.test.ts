import { intersection } from '../src/intersection'

test('primitive', () => {
  const a = [1, 2, 3, 4]
  const b = [3, 4, 5, 6]
  expect(intersection(a, b)).toEqual([3, 4])
})

test('object', () => {
  const a = [{ id: 1 }, { id: 2 }]
  const b = [{ id: 1 }, { id: 3 }]
  const r1 = intersection(a, b, el => String(el.id))
  const r2 = intersection(a, b)
  expect(r1).toEqual([{ id: 1 }])
  expect(r2).toEqual([])
})
