import { AnyFunction, Params } from './types';
/**
 * Invoke callback at once
 */
export declare function once<F extends AnyFunction>(f: F): (...val: Params<F>) => ReturnType<F> | undefined;
