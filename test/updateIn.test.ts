import { updateIn } from '../src/updateIn'

const src = () => ({
  obj: { a: 'a', b: 'b' },
  arr: [{ prop: 'a' }, { prop: 'b' }],
})

test('functional src', () => {
  const r1 = updateIn(src, ['obj'], v => ({ ...v, a: 'A' }))
  const r2 = updateIn(src, 'arr.0.prop', () => 'A')
  expect(r1).toEqual({ ...src(), obj: { a: 'A', b: 'b' } })
  expect(r2).toEqual({ ...src(), arr: [{ prop: 'A' }, { prop: 'b' }] })
})
test('object src', () => {
  const r1 = updateIn(src(), ['obj'], v => ({ ...v, a: 'A' }))
  expect(r1).toEqual({ ...src(), obj: { a: 'A', b: 'b' } })
})
