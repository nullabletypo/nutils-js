import { setIn } from '../src/setIn'

const src = () => ({
  obj: { a: 'a', b: 'b' },
  arr: [{ prop: 'a' }, { prop: 'b' }],
})

test('functional src', () => {
  const r1 = setIn(src, ['obj', 'a'], 'A')
  const r2 = setIn(src, 'arr.0.prop', 'A')
  expect(r1).toEqual({ ...src(), obj: { a: 'A', b: 'b' } })
  expect(r2).toEqual({ ...src(), arr: [{ prop: 'A' }, { prop: 'b' }] })
})

test('object src', () => {
  const srcObj = src()
  const r = setIn(srcObj, ['obj', 'a'], 'A')
  expect(r).toEqual({ ...src(), obj: { a: 'A', b: 'b' } })
  expect(srcObj).not.toEqual(r) // immutable
})

test('create node when missing', () => {
  const r = setIn(src, 'obj.c.d', 'D')
  expect(r).toEqual({ ...src(), obj: { ...src().obj, c: { d: 'D' } } })
})
