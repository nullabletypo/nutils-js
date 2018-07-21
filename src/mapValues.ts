import { has } from './has'

export function mapValues<T, K extends keyof T, U>(
  src: T,
  fn: (value: T[K], key: K, src: Readonly<T>) => U,
): { [P in K]: U } {
  const result: any = {}

  for (const key in src) {
    if (has.own(src, key)) {
      const value = src[key] as any
      result[key] = fn(value, key as any, src)
    }
  }

  return result
}

