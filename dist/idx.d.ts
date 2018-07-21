import { HashMap } from './types';
interface KM<T> {
    (val: T, i: number): string | number;
}
interface VM<T, U> {
    (val: T, i: number): U;
}
interface Mappers<T, U> {
    key?: KM<T>;
    val?: VM<T, U>;
}
declare function _idx<T, V = T>(src: Iterable<T>, mappers?: Mappers<T, V>): HashMap<V>;
declare function by<T, K extends keyof T>(src: Iterable<T>, key: K, mapper?: VM<T, T[K]>): HashMap<T>;
export declare const idx: typeof _idx & {
    by: typeof by;
};
export {};
