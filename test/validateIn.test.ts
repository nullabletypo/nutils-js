import { validateIn } from '../src/validateIn'

const src = {
  obj: { a: 'a', b: 'b' },
  arr: [{ prop: 'a' }, { prop: 'b' }],
}

test('validate', () => {
  const r1 = validateIn(src, ['obj', 'a'], s => typeof s === 'string')
  const r2 = validateIn(src, ['obj', 'a'], s => s === 'b')
  expect(r1).toBe(true)
  expect(r2).toBe(false)
})
