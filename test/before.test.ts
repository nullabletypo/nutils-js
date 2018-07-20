import { before } from '../src/before'

test('before', () => {
  const origin = (i: number) => i
  const mock = jest.fn(origin)
  const fn = before(2, mock as typeof origin)
  expect(fn(1)).toBe(1)
  expect(fn(1)).toBe(1)
  expect(fn(1)).toBeUndefined()
  expect(mock).toHaveBeenCalledTimes(2)
})
