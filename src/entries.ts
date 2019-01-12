import { has } from './has'

export function entries<T extends object, K extends keyof T>(
  obj: T,
): [K, T[K]][] {
  const origin = Object.entries as (src: T) => [K, T[K]][]
  return (origin ||
    ((src: T) => {
      const result: any[] = []
      for (const k in src) {
        if (has.own(obj, k)) {
          result.push([k, obj[k]])
        }
      }
      return result
    }))(obj)
}
