export declare type Falsy = false | undefined | null | 0 | -0 | '';
export interface HashMap<T = any> {
    [k: string]: T;
}
export declare type NonNullableHashMap<T> = {
    [P in keyof T]-?: T[P];
};
export interface Pred<T> {
    (value: any | T): value is T;
}
export interface Cmp<T> {
    (a: T, b: T): boolean;
}
export declare type Func<T extends any[], R> = (...val: T) => R;
export interface AnyFunction {
    (...values: any[]): any;
}
export declare type Params<F> = F extends (...val: infer A) => any ? A : [];
export declare type Head<T> = T extends [infer H, ...any[]] ? H : never;
export declare type Tail<T extends any[]> = ((...x: T) => void) extends ((h: any, ...rest: infer R) => void) ? R : never;
export declare type Union<T> = T extends [...(infer U)[]] ? U : never;
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
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/**
 * Get Diff (T - U)
 *
 * @example
 * type A = {a: string, b: number}
 * type B = {a?: string, b: number, x: number}
 * type C = Diff<B, A> // { x: number }
 */
export declare type Diff<T, U> = Omit<T, keyof T & keyof U>;
/**
 * Get Diff (T - U) and Partila<T>
 */
export declare type WeakDiff<T, U> = Diff<T, U> & {
    [K in Extract<keyof T, keyof U>]?: T[K];
};
/**
 * Overwrite T by U
 *
 * @example
 * type A = {a: string, b: number}
 * type B = {a?: string, b: number, x: number}
 * type C = Overwrite<A, B> // {b: number} & B
 *
 */
export declare type Overwrite<T, U> = Diff<T, U> & U;
/**
 * @example
 * type A = {a: string, b: number: c: number}
 * type T = MatchKeys<A, string> // "a"
 */
export declare type MatchKeys<T, TVal> = ({
    [K in keyof T]: T[K] extends TVal ? K : never;
})[keyof T];
/**
 * @example
 * type A = {a: string, b: number: c: number}
 * type T = UnMatchKeys<A, string> // "b" | "c
 */
export declare type UnMatchKeys<T, U> = ({
    [K in keyof T]: T[K] extends U ? never : K;
})[keyof T];
