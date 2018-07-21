import { values } from '../src/values'

test('values', () => {
  const reuslt = values({ a: 1, b: 2 })
  expect(reuslt).toContain(1)
  expect(reuslt).toContain(2)
})
