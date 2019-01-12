import { identity } from './identity'

type Flatten<T> = T extends (infer U)[] ? U : T
type Flatten5<T> = Flatten<Flatten<Flatten<Flatten<Flatten<T>>>>>
type Flatten10<T> = Flatten5<Flatten5<T>>
type DF<T> = Flatten10<Flatten10<Flatten10<Flatten10<Flatten10<T>>>>>

interface Mapper<T, U> {
  (val: DF<T>): U
}

export function flatten<T extends any[], U = DF<T>>(
  src: T,
  mapper = identity as Mapper<T, U>,
): U[] {
  return src.reduce(transform, [])

  function transform(acc: any[], el: any): any[] {
    if (Array.isArray(el)) {
      return el.reduce(transform, acc)
    }
    acc.push(mapper(el))
    return acc
  }
}
