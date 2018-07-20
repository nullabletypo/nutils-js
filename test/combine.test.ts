import { combine } from '../src/combine'

test('combine', () => {
  const a = (i: number) => i
  const b = (i: number) => i + ''
  const f = combine(a, b)
  expect(f(1)).toEqual([1, '1'])
})
