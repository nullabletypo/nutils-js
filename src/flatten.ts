import { identity } from './identity'
import { DeepFlatten as DF } from './types'

interface Mapper<T, U> {
  (val: DF<T>): U
}

export function flatten<T extends any[], U = DF<T>>(src: T, mapper = identity as Mapper<T, U>): U[] {
  return src.reduce(transform, [])

  function transform(acc: any[], el: any): any[] {
    if (Array.isArray(el)) {
      return el.reduce(transform, acc)
    }
    acc.push(mapper(el))
    return acc
  }
}
