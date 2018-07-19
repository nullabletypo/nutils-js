import { Omit } from '../types';
/**
 * Check if tagret in obj
 *
 * @export
 * @param {*} obj
 * @param {string} target
 * @returns
 */
export declare function hasOwn(obj: any, target: string): boolean;
export declare function omit<T, K extends keyof T>(obj: T, keys: K | K[]): Omit<T, K>;
export declare function omitBy<T, K extends keyof T>(src: T, pred: (v: T[K], k: K, src: Readonly<T>) => boolean): Partial<T>;
/**
 * Create object by picked props from object.
 */
export declare function pick<T, K extends keyof T>(obj: T, keys: K | K[]): Pick<T, K>;
/**
 * polyfil of Object.keys
 */
export declare function keys<T extends object, K extends keyof T>(obj: T): K[];
/**
 * polyfil of Object.values
 */
export declare function values<T extends object, K extends keyof T>(obj: T): T[K][];
/**
 * polyfil of Object.entries
 */
export declare function entries<T extends object, K extends keyof T>(obj: T): [K, T[K]][];
export declare function mapKeys<T, K extends keyof T, U extends string>(src: T, fn: (value: T[K], key: K, src: Readonly<T>) => U): {
    [P in U]: T[K];
};
export declare function mapValues<T, K extends keyof T, U>(src: T, fn: (value: T[K], key: K, src: Readonly<T>) => U): {
    [P in K]: U;
};
