// tslint:disable:max-line-length
import { Func0, Func1, Func2, Func3, Func4, Predicate as PredicateFn } from '../types'

/**
 * Check value is not undefined or null
 *
 * @export
 * @param {*} v
 * @returns {boolean}
 */
export function existy<T>(v: T | null | undefined): v is T {
  return !(v === null || v === undefined)
}

/**
 * Return same value that passed as the arguments.
 *
 * @export
 * @template T
 * @param {T} value
 * @returns {T}
 */
export function identity<T>(value: T, ..._: any[]) {
  return value
}

/**
 * Return function that return same value constantly.
 *
 * @export
 * @template T
 * @param {T} v
 * @returns {(...v[]) => T}
 */
export function constant<T>(v: T) {
  return (..._: any[]) => v
}

/**
 * no operation function
 *
 * @export
 */
export function noop(..._args: any[]) {/* no operation */ }

/**
 * Add prefix
 *
 * @export
 * @param {string} prefix
 * @returns {(s: string) => string}
 */
export function prefixer(prefix: string) {
  return (str: string) => prefix + str
}

/**
 * Bunled multi functions that same interface
 *
 * @export
 * @template A
 * @param {...((a: A) => any)[]} fns
 * @returns {(a: A) => undefined}
 */
export function bundle(...fns: Func0<any>[]): () => void
export function bundle<A>(...fns: Func1<A, any>[]): Func1<A, void>
export function bundle<A1, A2>(...fns: Func2<A1, A2, any>[]): Func2<A1, A2, void>
export function bundle<A1, A2, A3>(...fns: Func3<A1, A2, A3, any>[]): Func3<A1, A2, A3, void>
export function bundle<A1, A2, A3, A4>(...fns: Func4<A1, A2, A3, A4, any>[]): Func4<A1, A2, A3, A4, void>
export function bundle(...fns: Function[]): Function
export function bundle(...fns: Function[]): Function {
  return bundled
  function bundled(this: any) {
    fns.forEach(f => f.apply(this, arguments))
  }
}

export * from './compose'

/**
 * Invoke function once
 *
 * @export
 * @template F
 * @param {F} f
 * @returns {F}
 */
export function once<F extends Function>(f: F): F {
  let invoked = false
  return wrapped as any
  function wrapped(this: any) {
    if (!invoked) {
      invoked = true
      return f.apply(this, arguments)
    }
  }
}

/**
 * Invoke function once just on called on nth.
 *
 * @export
 * @param {number} n
 * @param {() => any} callback
 * @returns {() => void}
 */
export function afterOnce(n: number, callback: Func0<any>): Func0<void>
export function afterOnce<A>(n: number, callback: Func1<A, any>, init?: [A]): Func1<A, void>
export function afterOnce<A1, A2>(n: number, callback: Func2<A1, A2, any>, init?: [A1, A2]): Func2<A1, A2, void>
export function afterOnce<A1, A2, A3>(n: number, callback: Func3<A1, A2, A3, any>, init?: [A1, A2, A3]): Func3<A1, A2, A3, void>
export function afterOnce<A1, A2, A3, A4>(n: number, callback: Func4<A1, A2, A3, A4, any>, init?: [A1, A2, A3, A4]): Func4<A1, A2, A3, A4, void>
export function afterOnce(n: number, callback: Function, init: any[]): Function
export function afterOnce(n: number, callback: Function, init: any[] = []): Function {
  let invoked = false
  let count = 0
  return (n <= 0) ? constant(awaiter)(callback.apply(null, init)) : awaiter

  function awaiter(this: any) {

    if (invoked) { return }

    count = count + 1

    if (n === count) {
      invoked = true
      callback.apply(this, arguments)
    }
  }
}

/**
 * get global variables
 *
 * @export
 * @returns
 */
export function getGlobal() {
  return Function('return this')()
}

/**
 * sleep N ms
 *
 * @export
 * @param {number} [ms=0]
 * @returns
 */
export function delay(ms = 0) {
  return new Promise<void>(resolve => {
    const tid = setTimeout(() => {
      clearTimeout(tid)
      resolve()
    }, ms) // tslint:disable-line
  })
}


/**
 * Create a function that predicate a source and interface
 *
 * @template T
 * @param {conforms.PredicateMap<T>} predicatemap
 * @returns {Function}
 */
export function conforms<T>(predicatemap: conforms.PredicateMap<T>) {
  const keys = Object.keys(predicatemap) as (keyof T)[]
  const len = keys.length

  return function predicate(value: T | any): value is T {
    let i = -1

    try {
      while (++i < len) {
        const k = keys[i]
        const fn = predicatemap[k]

        if (!existy(value) || !(k in value) || !fn(value[k])) {
          return false
        }
      }
    } catch {
      return false
    }

    return true
  }
}

export namespace conforms {
  export type Predicate<T> = PredicateFn<T>
  export type PredicateMap<T> = {
    [K in keyof T]: Predicate<T[K]>
  }

  export function skipProd<T>(predicatemap: PredicateMap<T>) {
    if (process.env.NODE_ENV === 'production') {
      return constant(true) as (v: any) => v is T
    }
    return conforms(predicatemap)
  }
}

/**
 * Create a PredicateFunction that reverse predicate function result
 *
 * @export
 * @param {() => any} f
 * @returns {() => boolean}
 */
export function not(f: Func0<any>): Func0<boolean>
export function not<A>(f: Func1<A, any>): Func1<A, boolean>
export function not<A1, A2>(f: Func2<A1, A2, any>): Func2<A1, A2, boolean>
export function not<A1, A2, A3>(f: Func3<A1, A2, A3, any>): Func3<A1, A2, A3, boolean>
export function not<A1, A2, A3, A4>(f: Func4<A1, A2, A3, A4, any>): Func4<A1, A2, A3, A4, boolean>
export function not(f: Function): Function
export function not(f: any): Function {
  return function (this: any) {
    return !Boolean(f.apply(this, arguments))
  }
}

/**
 * Create a PredicateFunction that A and B...
 *
 * @export
 * @template T1
 * @template T2
 * @param {PredicateFn<T1>} f1
 * @param {PredicateFn<T2>} f2
 * @returns {(PredicateFn<T1 | T2>)}
 */
export function or<T1, T2>(f1: PredicateFn<T1>, f2: PredicateFn<T2>): PredicateFn<T1 | T2>
export function or<T1, T2, T3>(f1: PredicateFn<T1>, f2: PredicateFn<T2>, f3: PredicateFn<T3>): PredicateFn<T1 | T2 | T3>
export function or<T1, T2, T3, T4>(
  f1: PredicateFn<T1>,
  f2: PredicateFn<T2>,
  f3: PredicateFn<T3>,
  f4: PredicateFn<T4>): PredicateFn<T1 | T2 | T3 | T4>
export function or(...funcs: PredicateFn<any>[]): PredicateFn<any>
export function or(...funcs: PredicateFn<any>[]) {
  const len = funcs.length
  return function predicate(v: any) {
    let i = -1
    while (++i < len) {
      if (funcs[i](v)) {
        return true
      }
    }
    return false
  }
}

/**
 * Create a PredicateFunction that A and B ...
 *
 * @export
 * @template T1
 * @template T2
 * @param {PredicateFn<T1>} f1
 * @param {PredicateFn<T2>} f2
 * @returns {(PredicateFn<T1 & T2>)}
 */
export function and<T1, T2>(f1: PredicateFn<T1>, f2: PredicateFn<T2>): PredicateFn<T1 & T2>
export function and<T1, T2, T3>(f1: PredicateFn<T1>, f2: PredicateFn<T2>, f3: PredicateFn<T3>): PredicateFn<T1 & T2 & T3>
export function and<T1, T2, T3, T4>(
  f1: PredicateFn<T1>,
  f2: PredicateFn<T2>,
  f3: PredicateFn<T3>,
  f4: PredicateFn<T4>): PredicateFn<T1 & T2 & T3 & T4>
export function and(...funcs: PredicateFn<any>[]): PredicateFn<any>
export function and(...funcs: PredicateFn<any>[]) {
  const len = funcs.length
  return function predicate(v: any) {
    let i = -1
    while (++i < len) {
      if (!funcs[i](v)) {
        return false
      }
    }
    return true
  }
}
