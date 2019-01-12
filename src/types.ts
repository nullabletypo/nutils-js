export type Falsy = false | undefined | null | 0 | -0 | ''

export interface HashMap<T = any> {
  [k: string]: T
}

export type NonNullableHashMap<T> = { [P in keyof T]-?: T[P] }

export interface Pred<T> {
  (value: any | T): value is T
}

export interface Cmp<T> {
  (a: T, b: T): boolean
}

export type Func<T extends any[], R> = (...val: T) => R

export interface AnyFunction {
  (...values: any[]): any
}

export type Params<F> = F extends (...val: infer A) => any ? A : []

export type Head<T> = T extends [infer H, ...any[]] ? H : never

export type Tail<T extends any[]> = ((...x: T) => void) extends ((
  h: any,
  ...rest: infer R
) => void)
  ? R
  : never

export type Union<T> = T extends [...(infer U)[]] ? U : never

/**
 * Get Type that omit keys from T
 * K should be not keyof T but string.
 *
 * @example
 * type A = {a: string, b: number}
 * type B = {a: string, x: number} // When K is keyof T, x is invalid type.
 * type C = Omit<A, keyof B> // { b: number }
 *
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

/**
 * Get Diff (T - U)
 *
 * @example
 * type A = {a: string, b: number}
 * type B = {a?: string, b: number, x: number}
 * type C = Diff<B, A> // { x: number }
 */
export type Diff<T, U> = Omit<T, keyof T & keyof U>

/**
 * Get Diff (T - U) and Partila<T>
 */
export type WeakDiff<T, U> = Diff<T, U> &
  { [K in Extract<keyof T, keyof U>]?: T[K] }

// /**
//  * Overwrite T by U
//  *
//  * @example
//  * type A = {a: string, b: number}
//  * type B = {a?: string, b: number, x: number}
//  * type C = Overwrite<A, B> // {b: number} & B
//  *
//  */
export type Overwrite<T, U> = Diff<T, U> & U
