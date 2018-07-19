import { Omit } from '../types'
/**
 * Check if tagret in obj
 *
 * @export
 * @param {*} obj
 * @param {string} target
 * @returns
 */
export function hasOwn(obj: any, target: string): boolean {
  try {
    return obj.hasOwnProperty(target)
  } catch {
    return false
  }
}

/* tslint:disable:no-shadowed-variable */
export function omit<T, K extends keyof T>(obj: T, keys: K | K[]): Omit<T, K> {
  keys = Array.isArray(keys) ? keys : [keys]
  const clone = Object.assign({}, obj)
  let i = -1
  const len = keys.length
  while (++i < len) { delete clone[keys[i]] }
  return clone as any
}

export function omitBy<T, K extends keyof T>(src: T, pred: (v: T[K], k: K, src: Readonly<T>) => boolean): Partial<T> {
  const copy: any = Object.assign({}, src)
  Object.keys(src).forEach(k => {
    const v = copy[k]
    if (pred(v, k as K, src)) {
      delete copy[k]
    }
  })
  return copy
}

/**
 * Create object by picked props from object.
 */
export function pick<T, K extends keyof T>(obj: T, keys: K | K[]): Pick<T, K> {
  keys = Array.isArray(keys) ? keys : [keys]
  const result: any = {}
  let i = -1
  const len = keys.length
  while (++i < len) { result[keys[i]] = (obj as any)[keys[i]] }
  return result
}
/* tslint:enable:no-shadowed-variable */

/**
 * polyfil of Object.keys
 */
export function keys<T extends object, K extends keyof T>(obj: T): K[] {
  const origin = Object.keys as (src: T) => K[]
  return (origin || ((src: T) => {
    const result: K[] = []
    for (const key in src) {
      if (hasOwn(src, key)) {
        result.push(key as any)
      }
    }
    return result
  }))(obj)
}

/**
 * polyfil of Object.values
 */
export function values<T extends object, K extends keyof T>(obj: T): T[K][] {
  const origin = Object.values as (src: T) => T[K][]
  return (origin || ((src: T) => {
    const result: any = []
    for (const key in src) {
      if (hasOwn(src, key)) {
        result.push(src[key])
      }
    }
    return result
  }))(obj)
}

/**
 * polyfil of Object.entries
 */
export function entries<T extends object, K extends keyof T>(obj: T): [K, T[K]][] {
  const origin = Object.entries as (src: T) => [K, T[K]][]
  return (origin || ((src: T) => {
    const result: any[] = []
    for (const k in src) {
      if (hasOwn(obj, k)) {
        result.push([k, obj[k]])
      }
    }
    return result
  }))(obj)
}

export function mapKeys<T, K extends keyof T, U extends string>(
  src: T,
  fn: (value: T[K], key: K, src: Readonly<T>) => U,
): { [P in U]: T[K] } {
  const result: any = {}

  for (const key in src) {
    if (hasOwn(src, key)) {
      const val = src[key] as any
      const newKey = fn(val, key as any, src)
      result[newKey] = val
    }
  }
  return result
}

export function mapValues<T, K extends keyof T, U>(
  src: T,
  fn: (value: T[K], key: K, src: Readonly<T>) => U,
): { [P in K]: U } {
  const result: any = {}

  for (const key in src) {
    if (hasOwn(src, key)) {
      const value = src[key] as any
      result[key] = fn(value, key as any, src)
    }
  }

  return result
}
