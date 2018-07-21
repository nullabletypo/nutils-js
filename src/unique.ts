import { idx } from './idx'
import { values } from './values'

type KM<T> = (val: T) => string

export function unique<T>(src: T[], getKey?: KM<T>) {
  if (getKey == undefined) {
    return Array.from(new Set(src))
  }
  return values(idx(src, { key: getKey }))
}
