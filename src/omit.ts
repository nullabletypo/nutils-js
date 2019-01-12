import { Omit } from './types'

function _omit<T, K extends keyof T>(src: T, keys: K | K[]): Omit<T, K> {
  keys = Array.isArray(keys) ? keys : [keys]
  const clone = Object.assign({}, src)
  let i = -1
  const len = keys.length
  while (++i < len) {
    delete clone[keys[i]]
  }
  return clone as any
}

function by<T, K extends keyof T>(
  src: T,
  pred: (v: T[K], k: K, src: Readonly<T>) => boolean,
): Partial<T> {
  const copy: any = Object.assign({}, src)
  Object.keys(src).forEach(k => {
    const v = copy[k]
    if (pred(v, k as K, src)) {
      delete copy[k]
    }
  })
  return copy
}

export const omit = Object.assign(_omit, { by })
