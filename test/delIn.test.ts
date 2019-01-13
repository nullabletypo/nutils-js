import { delIn } from '../src/delIn'

test('delIn', () => {
  const src = {
    obj: { a: 'a', b: 'b' },
    arr: [{ prop: 'a' }, { prop: 'b' }],
  }

  expect(delIn(src, ['obj', 'a'])).toEqual({ ...src, obj: { b: 'b' } })
  expect(delIn(src, 'arr.1')).toEqual({ ...src, arr: [{ prop: 'a' }] })
})
