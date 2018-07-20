import { after } from '../src/after'

test('after', () => {
  const origin = (n: number) => n
  const mock = jest.fn(origin)
  const wraped = after(2, mock as typeof origin)
  expect(wraped(1)).toBeUndefined()
  expect(wraped(1)).toBe(1)
  expect(wraped(1)).toBeUndefined()
  expect(mock).toHaveBeenCalledTimes(1)
})
