import { setIn } from '../src/setIn'

test('setIn', () => {
  const src = {
    obj: { a: 'a', b: 'b' },
    arr: [{ prop: 'a' }, { prop: 'b' }],
  }

  const r1 = setIn(src, ['obj', 'a'], 'A')
  expect(r1).toEqual({ ...src, obj: { a: 'A', b: 'b' } })

  const r2 = setIn(src, 'arr.0.prop', 'A')
  expect(r2).toEqual({ ...src, arr: [{ prop: 'A' }, { prop: 'b' }] })
})
