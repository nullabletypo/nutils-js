import { range } from '../src/range'

describe('range', () => {
  test('1 argument', () => {
    expect(range(3)).toEqual([0, 1, 2, 3])
    expect(range(0)).toEqual([0])
    expect(range(-3)).toEqual([0, -1, -2, -3])
  })

  test('2 arguments', () => {
    expect(range(1, 3)).toEqual([1, 2, 3])
    expect(range(0, 0)).toEqual([0])
    expect(range(-1, 1)).toEqual([-1, 0, 1])
    expect(range(1, -1)).toEqual([1, 0, -1])
    expect(range(-1, -3)).toEqual([-1, -2, -3])
  })

  test('3 arguments', () => {
    expect(range(0, 6, 2)).toEqual([0, 2, 4, 6])
    expect(range(0, 6, -2)).toEqual([0, 2, 4, 6])
    expect(range(0, 0, 2)).toEqual([0])
    expect(range(0, 0, 0)).toEqual([0])
    expect(range(1, 5, 3)).toEqual([1, 4])
    expect(range(0, -6, 2)).toEqual([0, -2, -4, -6])
    expect(range(0, -6, -2)).toEqual([0, -2, -4, -6])
  })
})
