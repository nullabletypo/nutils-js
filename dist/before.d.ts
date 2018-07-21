import { Params, AnyFunction } from './types';
export declare function before<F extends AnyFunction>(n: number, cb: F): (...val: Params<F>) => ReturnType<F> | undefined;
