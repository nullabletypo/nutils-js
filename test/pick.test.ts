import { pick } from '../src/pick'

test('pick', () => {
  const src = { a: 1, b: 2 }
  const result = pick(src, ['a'])
  expect(result).toStrictEqual({ a: 1 })
  expect(src).toStrictEqual({ a: 1, b: 2 })
})
