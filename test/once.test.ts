import { once } from '../src/once'

test('once', () => {
  const origin = (a: number, b: number) => a + b
  const mock = jest.fn(origin)
  const f = once(mock as typeof origin)
  expect(f(1, 1)).toBe(2)
  expect(f(1, 1)).toBe(undefined)
  expect(mock).toHaveBeenCalledTimes(1)
})
