import { has } from './has'

export function mapKeys<T, K extends keyof T, U extends string>(
  src: T,
  fn: (value: T[K], key: K, src: Readonly<T>) => U,
): { [P in U]: T[K] } {
  const result: any = {}

  for (const key in src) {
    if (has.own(src, key)) {
      const val = src[key] as any
      const newKey = fn(val, key as any, src)
      result[newKey] = val
    }
  }
  return result
}
