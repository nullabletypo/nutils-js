/**
 * mutable set
 */
export function set<T, K extends keyof T>(src: T, key: K, val: T[K]) {
  src[key] = val
  return src
}
