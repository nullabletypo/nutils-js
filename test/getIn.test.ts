import { getIn } from '../src/getIn'

test('getIn', () => {
  const src = {
    obj: { a: 'a', b: 'b' },
    arr: [{ prop: 'a' }, { prop: 'b' }],
  }
  expect(getIn(src, ['obj', 'a'])).toBe('a')
  expect(getIn(src, 'obj.a')).toBe('a')
  expect(getIn(src, 'arr.0.prop')).toBe('a')
  expect(getIn(src, 'obj.c')).toBeUndefined()
})
