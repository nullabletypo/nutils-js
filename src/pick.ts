import { set } from './set'

export function pick<T, K extends keyof T>(src: T, keys: K | K[]): Pick<T, K> {
  keys = Array.isArray(keys) ? keys : [keys]
  return keys.reduce((acc, key) => set(acc, key, src[key]), {} as T)
}
