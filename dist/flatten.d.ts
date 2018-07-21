import { DeepFlatten as DF } from './types';
interface Mapper<T, U> {
    (val: DF<T>): U;
}
export declare function flatten<T extends any[], U = DF<T>>(src: T, mapper?: Mapper<T, U>): U[];
export {};
