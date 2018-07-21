import { has } from './has'

export function keys<T extends object, K extends keyof T>(obj: T): K[] {
  const origin = Object.keys as (src: T) => K[]
  return (origin || ((src: T) => {
    const result: K[] = []
    for (const key in src) {
      if (has.own(src, key)) {
        result.push(key as any)
      }
    }
    return result
  }))(obj)
}
