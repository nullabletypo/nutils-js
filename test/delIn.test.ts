import { delIn } from '../src/delIn'

const src = () => ({
  obj: { a: 'a', b: 'b' },
  arr: [{ prop: 'a' }, { prop: 'b' }],
})

test('functional src', () => {
  const r = delIn(src, ['obj', 'a'])
  expect(r).toEqual({ ...src(), obj: { b: 'b' } })
})
test('object src', () => {
  const r = delIn(src(), 'arr.1')
  expect(r).toEqual({ ...src(), arr: [{ prop: 'a' }] })
})
