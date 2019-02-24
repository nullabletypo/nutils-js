import { unique } from '../src/unique'

test('primitive', () => {
  const src = [1, 2, 3, 3, 1]
  expect(unique(src)).toEqual([1, 2, 3])
})

test('object', () => {
  const src = [{ id: 1 }, { id: 2 }, { id: 1 }, { id: 3 }]
  const r1 = unique(src, el => String(el.id))
  const r2 = unique(src)
  expect(r1).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }])
  expect(r2).toEqual(src)
})
