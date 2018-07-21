import { flatten } from '../src/flatten'

const src = [1, [[2, 3, [4]]], 5]

describe('flatten', () => {
  test('flatten deeply', () => {
    const r = flatten(src)
    expect(r).toEqual([1, 2, 3, 4, 5])
  })

  test('with mapper', () => {
    const mapper = (x: number) => x + 1
    const r = flatten(src, mapper)
    expect(r).toEqual([2, 3, 4, 5, 6])
  })
})
