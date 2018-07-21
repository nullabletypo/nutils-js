import { has } from './has'
import { contains } from './contains'
import { idx } from './idx'

type KM<T> = (el: T) => string

export function intersection<T>(a: T[], b: T[], getKey?: KM<T>) {
  if (getKey == undefined) {
    return a.filter(el => contains(b, el))
  }
  const bHash = idx(b, { key: getKey })
  return a.filter(el => has(bHash, getKey(el)))
}
