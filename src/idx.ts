import { identity } from './identity'
import { NonNullableHashMap, HashMap } from './types'

interface KM<T> {
  (val: T, i: number): string | number
}

interface VM<T, U> {
  (val: T, i: number): U
}

interface Mappers<T, U> {
  key?: KM<T>
  val?: VM<T, U>
}

const defaults = {
  key: (_: any, i: number) => i,
  val: identity,
}

const transformer = <T, V>(m: NonNullableHashMap<Mappers<T, V>>) => {
  return (acc: HashMap<V>, el: T, i: number) => {
    acc[m.key(el, i)] = m.val(el, i)
    return acc
  }
}

function _idx<T, V = T>(src: Iterable<T>, mappers?: Mappers<T, V>) {
  const m = { ...defaults, ...mappers } as NonNullableHashMap<Mappers<T, V>>
  return Array.from(src).reduce(transformer(m), {} as HashMap<V>)
}

function by<T, K extends keyof T>(
  src: Iterable<T>,
  key: K,
  mapper?: VM<T, T[K]>,
) {
  const m: any = { key: (el: T) => el[key], val: mapper }
  return _idx(src, m)
}

export const idx = Object.assign(_idx, { by })
