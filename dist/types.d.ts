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
export declare type Overwrite<T, U> = Diff<T, U> & U;
export declare type Flatten<T> = T extends (infer U)[] ? U : T;
declare type Flatten5<T> = Flatten<Flatten<Flatten<Flatten<Flatten<T>>>>>;
declare type Flatten10<T> = Flatten5<Flatten5<T>>;
export declare type DeepFlatten<T> = Flatten10<Flatten10<Flatten10<Flatten10<Flatten10<T>>>>>;
export {};
