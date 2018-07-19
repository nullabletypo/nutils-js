import { Falsy } from '../types';
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
export declare function contains<T>(arr: T[], target: T, cmp?: (a: T, b: T) => boolean): boolean;
export { contains as incluedes };
/**
 * Create non-duplicated array
 * @template T
 * @param {T[]} arr
 * @param {(a: T, b: T) = boolean} [cmp=Object.is]
 * @returns {T[]}
 */
export declare function unique<T>(arr: T[], cmp?: (a: T, b: T) => boolean): T[];
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
export declare function intersection<T>(a: T[], b: T[], cmp?: (x: T, y: T) => boolean): T[];
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
export declare function difference<T>(a: T[], b: T[], cmp?: (x: T, y: T) => boolean): T[];
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
export declare function makeHashGroup<T, K extends keyof T>(arr: T[], key: K): {
    [k: string]: T;
};
/**
 * create array of numbers from start to end.
 *
 * @returns {number[]}
 */
export declare function range(end: number): number[];
export declare function range(start: number, end: number, step?: number): number[];
export declare namespace range {
    function director(start: number, end: number): (n: number) => boolean;
}
/**
 * create an array removed falsy value.
 *
 * @export
 * @template T
 * @param {((T | Falsy)[])} arr
 * @returns {T[]}
 */
export declare function compact<T>(arr: (T | Falsy)[]): T[];
/**
 * flat array with optional mapper
 * @param arr
 * @param mapper
 */
export declare function flatten<T, U>(arr: T[], mapper?: (value: T) => U): U[];
