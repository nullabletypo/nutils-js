import { Params, AnyFunction } from './types';
export declare function after<F extends AnyFunction>(n: number, cb: F): (...val: Params<F>) => ReturnType<F> | undefined;
