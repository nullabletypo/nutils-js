import { Falsy } from './types'

export function compact<T>(arr: (T | Falsy)[]): T[] {
  return arr.filter(Boolean as any)
}
