import { Func0, Func1, Func2, Func3, Func4, Predicate as PredicateFn } from '../types';
/**
 * Check value is not undefined or null
 *
 * @export
 * @param {*} v
 * @returns {boolean}
 */
export declare function existy<T>(v: T | null | undefined): v is T;
/**
 * Return same value that passed as the arguments.
 *
 * @export
 * @template T
 * @param {T} value
 * @returns {T}
 */
export declare function identity<T>(value: T, ..._: any[]): T;
/**
 * Return function that return same value constantly.
 *
 * @export
 * @template T
 * @param {T} v
 * @returns {(...v[]) => T}
 */
export declare function constant<T>(v: T): (..._: any[]) => T;
/**
 * no operation function
 *
 * @export
 */
export declare function noop(..._args: any[]): void;
/**
 * Add prefix
 *
 * @export
 * @param {string} prefix
 * @returns {(s: string) => string}
 */
export declare function prefixer(prefix: string): (str: string) => string;
/**
 * Bunled multi functions that same interface
 *
 * @export
 * @template A
 * @param {...((a: A) => any)[]} fns
 * @returns {(a: A) => undefined}
 */
export declare function bundle(...fns: Func0<any>[]): () => void;
export declare function bundle<A>(...fns: Func1<A, any>[]): Func1<A, void>;
export declare function bundle<A1, A2>(...fns: Func2<A1, A2, any>[]): Func2<A1, A2, void>;
export declare function bundle<A1, A2, A3>(...fns: Func3<A1, A2, A3, any>[]): Func3<A1, A2, A3, void>;
export declare function bundle<A1, A2, A3, A4>(...fns: Func4<A1, A2, A3, A4, any>[]): Func4<A1, A2, A3, A4, void>;
export declare function bundle(...fns: Function[]): Function;
export * from './compose';
/**
 * Invoke function once
 *
 * @export
 * @template F
 * @param {F} f
 * @returns {F}
 */
export declare function once<F extends Function>(f: F): F;
/**
 * Invoke function once just on called on nth.
 *
 * @export
 * @param {number} n
 * @param {() => any} callback
 * @returns {() => void}
 */
export declare function afterOnce(n: number, callback: Func0<any>): Func0<void>;
export declare function afterOnce<A>(n: number, callback: Func1<A, any>, init?: [A]): Func1<A, void>;
export declare function afterOnce<A1, A2>(n: number, callback: Func2<A1, A2, any>, init?: [A1, A2]): Func2<A1, A2, void>;
export declare function afterOnce<A1, A2, A3>(n: number, callback: Func3<A1, A2, A3, any>, init?: [A1, A2, A3]): Func3<A1, A2, A3, void>;
export declare function afterOnce<A1, A2, A3, A4>(n: number, callback: Func4<A1, A2, A3, A4, any>, init?: [A1, A2, A3, A4]): Func4<A1, A2, A3, A4, void>;
export declare function afterOnce(n: number, callback: Function, init: any[]): Function;
/**
 * get global variables
 *
 * @export
 * @returns
 */
export declare function getGlobal(): any;
/**
 * sleep N ms
 *
 * @export
 * @param {number} [ms=0]
 * @returns
 */
export declare function delay(ms?: number): Promise<void>;
/**
 * Create a function that predicate a source and interface
 *
 * @template T
 * @param {conforms.PredicateMap<T>} predicatemap
 * @returns {Function}
 */
export declare function conforms<T>(predicatemap: conforms.PredicateMap<T>): (value: any) => value is T;
export declare namespace conforms {
    type Predicate<T> = PredicateFn<T>;
    type PredicateMap<T> = {
        [K in keyof T]: Predicate<T[K]>;
    };
    function skipProd<T>(predicatemap: PredicateMap<T>): (v: any) => v is T;
}
/**
 * Create a PredicateFunction that reverse predicate function result
 *
 * @export
 * @param {() => any} f
 * @returns {() => boolean}
 */
export declare function not(f: Func0<any>): Func0<boolean>;
export declare function not<A>(f: Func1<A, any>): Func1<A, boolean>;
export declare function not<A1, A2>(f: Func2<A1, A2, any>): Func2<A1, A2, boolean>;
export declare function not<A1, A2, A3>(f: Func3<A1, A2, A3, any>): Func3<A1, A2, A3, boolean>;
export declare function not<A1, A2, A3, A4>(f: Func4<A1, A2, A3, A4, any>): Func4<A1, A2, A3, A4, boolean>;
export declare function not(f: Function): Function;
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
export declare function or<T1, T2>(f1: PredicateFn<T1>, f2: PredicateFn<T2>): PredicateFn<T1 | T2>;
export declare function or<T1, T2, T3>(f1: PredicateFn<T1>, f2: PredicateFn<T2>, f3: PredicateFn<T3>): PredicateFn<T1 | T2 | T3>;
export declare function or<T1, T2, T3, T4>(f1: PredicateFn<T1>, f2: PredicateFn<T2>, f3: PredicateFn<T3>, f4: PredicateFn<T4>): PredicateFn<T1 | T2 | T3 | T4>;
export declare function or(...funcs: PredicateFn<any>[]): PredicateFn<any>;
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
export declare function and<T1, T2>(f1: PredicateFn<T1>, f2: PredicateFn<T2>): PredicateFn<T1 & T2>;
export declare function and<T1, T2, T3>(f1: PredicateFn<T1>, f2: PredicateFn<T2>, f3: PredicateFn<T3>): PredicateFn<T1 & T2 & T3>;
export declare function and<T1, T2, T3, T4>(f1: PredicateFn<T1>, f2: PredicateFn<T2>, f3: PredicateFn<T3>, f4: PredicateFn<T4>): PredicateFn<T1 & T2 & T3 & T4>;
export declare function and(...funcs: PredicateFn<any>[]): PredicateFn<any>;
