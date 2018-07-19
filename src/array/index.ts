import { Falsy } from '../types'
import { identity } from '../utils'

/**
 * Check if value in array using by comparator.
 *
 * @export
 * @template T
 * @param {T[]} arr
 * @param {T} target
 * @param {(a: T, b: T) => boolean} [cmp=Object.is]
 * @returns
 */
export function contains<T>(arr: T[], target: T, cmp: (a: T, b: T) => boolean = Object.is) {
  let result = false
  let i = -1
  const len = arr.length

  while (++i < len) {
    if (cmp(arr[i], target)) {
      result = true
      break
    }
  }

  return result
}

/* alias */
export { contains as incluedes }
/*  */

/**
 * Create non-duplicated array
 * @template T
 * @param {T[]} arr
 * @param {(a: T, b: T) = boolean} [cmp=Object.is]
 * @returns {T[]}
 */
export function unique<T>(arr: T[], cmp: (a: T, b: T) => boolean = Object.is) {
  const r: T[] = []
  let i = -1
  const len = arr.length

  while (++i < len) {
    if (!contains(r, arr[i], cmp)) { r.push(arr[i]) }
  }

  return r
}

/**
 * intersection (a & b)
 *
 * @export
 * @template T
 * @param {T[]} a
 * @param {T[]} b
 * @param {(x: T, y: T) => boolean} [cmp=Object.is]
 * @returns {T[]}
 */
export function intersection<T>(a: T[], b: T[], cmp: (x: T, y: T) => boolean = Object.is) {
  const r: T[] = []
  let i = -1
  const len = a.length

  while (++i < len) {
    if (contains(b, a[i], cmp)) { r.push(a[i]) }
  }

  return unique(r)
}

/**
 * defference (a - b)
 *
 * @export
 * @template T
 * @param {T[]} a
 * @param {T[]} b
 * @param {(x: T, y: T) => boolean} [cmp=Object.is]
 * @returns {T[]}
 */
export function difference<T>(a: T[], b: T[], cmp: (x: T, y: T) => boolean = Object.is) {
  const r: T[] = []
  let i = -1
  const len = a.length

  while (++i < len) {
    if (!contains(b, a[i], cmp)) { r.push(a[i]) }
  }

  return unique(r)
}

/**
 * Transform to kv hash from array of object
 *
 * @export
 * @template T
 * @template K
 * @param {T[]} arr
 * @param {K} key
 * @returns {{ [k: string]: T }}
 */
export function makeHashGroup<T, K extends keyof T>(arr: T[], key: K): { [k: string]: T } {
  return arr.reduce((acc, obj) => {
    acc[obj[key]] = obj
    return acc
  }, {} as any) // tslint:disable-line
}

// tslint:disable:unified-signatures

/**
 * create array of numbers from start to end.
 *
 * @returns {number[]}
 */
export function range(end: number): number[]
export function range(start: number, end: number, step?: number): number[]
export function range(x: number, y?: number, z = 1) {
  z = Math.abs(z) || 1
  const [start, end] = arguments.length === 1 ? [0, x] : [x, y!]
  const step = Math.sign(end - start) >= 0 ? z : (z * -1)

  let current = start
  const result: number[] = []
  const comparator = range.director(start, end)

  while (comparator(current)) {
    result.push(current)
    current += step
  }

  return result
}

export namespace range {
  export function director(start: number, end: number) {
    return (start <= end)
      ? (n: number) => n <= end
      : (n: number) => n >= end
  }
}
// tslint:enable:unified-signatures


/**
 * create an array removed falsy value.
 *
 * @export
 * @template T
 * @param {((T | Falsy)[])} arr
 * @returns {T[]}
 */
export function compact<T>(arr: (T | Falsy)[]): T[] {
  return arr.filter(Boolean as any)
}


/**
 * flat array with optional mapper
 * @param arr
 * @param mapper
 */
export function flatten<T, U>(arr: T[], mapper: (value: T) => U = identity as typeof mapper): U[] {
  return _flatten(arr, mapper, [])
}

function _flatten<T, U = T>(arr: T[], mapper: (value: T) => U = identity as typeof mapper, acc: U[]) {
  let i = -1
  const len = arr.length

  while (++i < len) {
    const x = arr[i]
    if (Array.isArray(x)) {
      _flatten(x, mapper, acc)
    } else {
      acc.push(mapper(x) as any)
    }
  }

  return acc
}
