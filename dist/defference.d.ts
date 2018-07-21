/**
 * a[] - b[]
 */
declare type KM<T> = (val: T) => string;
export declare function difference<T>(a: T[], b: T[], getKey?: KM<T>): T[];
export {};
