/**
 * mutable set
 */
export declare function set<T, K extends keyof T>(src: T, key: K, val: T[K]): T;
