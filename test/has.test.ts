import { has } from '../src/has'


test('has', () => {
  expect(has(null, 'xxx')).toBe(false)
  expect(has(new Map(), 'get')).toBe(true)
})

test('has.own', () => {
  expect(has.own(null, 'xxx')).toBe(false)
  expect(has.own(new Map(), 'get')).toBe(false)
  expect(has.own({ a: 1 }, 'a')).toBe(true)
})

