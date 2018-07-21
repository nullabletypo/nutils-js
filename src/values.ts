import { has } from './has'

export function values<T extends object, K extends keyof T>(obj: T): T[K][] {
  const origin = Object.values as (src: T) => T[K][]
  return (origin || ((src: T) => {
    const result: any = []
    for (const key in src) {
      if (has.own(src, key)) {
        result.push(src[key])
      }
    }
    return result
  }))(obj)
}
