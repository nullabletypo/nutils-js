import { getIn } from '../src/getIn'

const src = () => ({
  obj: { a: 'a', b: 'b' },
  arr: [{ prop: 'a' }, { prop: 'b' }],
})

test('functional src', () => {
  expect(getIn(src, ['obj', 'a'])).toBe('a')
  expect(getIn(src, 'obj.a')).toBe('a')
  expect(getIn(src, 'arr.0.prop')).toBe('a')
  expect(getIn(src, 'obj.c')).toBeUndefined()
})

test('object src', () => {
  expect(getIn(src(), ['obj', 'a'])).toBe('a')
})
