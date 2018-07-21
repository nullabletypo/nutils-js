import { Omit } from './types';
declare function _omit<T, K extends keyof T>(src: T, keys: K | K[]): Omit<T, K>;
declare function by<T, K extends keyof T>(src: T, pred: (v: T[K], k: K, src: Readonly<T>) => boolean): Partial<T>;
export declare const omit: typeof _omit & {
    by: typeof by;
};
export {};
