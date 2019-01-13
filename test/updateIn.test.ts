import { updateIn } from '../src/updateIn'

test('updateIn', () => {
  const src = {
    obj: { a: 'a', b: 'b' },
    arr: [{ prop: 'a' }, { prop: 'b' }],
  }
  const r1 = updateIn(src, ['obj'], v => ({ ...v, a: 'A' }))
  expect(r1).toEqual({ ...src, obj: { a: 'A', b: 'b' } })
  const r2 = updateIn(src, 'arr.0.prop', () => 'A')
  expect(r2).toEqual({ ...src, arr: [{ prop: 'A' }, { prop: 'b' }] })
})
