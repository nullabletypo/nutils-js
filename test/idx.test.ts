import { idx } from '../src/idx'

describe('idx', () => {
  const src = [{ id: 1 }, { id: 2 }]

  test('create hash-map', () => {
    const result = idx(src)
    expect(result).toEqual({ 0: { id: 1 }, 1: { id: 2 } })
  })

  test('with mapper', () => {
    const result = idx(src, { key: e => e.id, val: e => e.id })
    expect(result).toEqual({ 1: 1, 2: 2 })
  })

  test('idx.by', () => {
    const result = idx.by(src, 'id', el => el.id)
    expect(result).toEqual({ 1: 1, 2: 2 })
  })
})

