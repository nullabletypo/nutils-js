import { Params, AnyFunction } from './types';
/**
 * Create a pred function reversed it result
 */
export declare function not<F extends AnyFunction>(f: F): (...val: Params<F>) => boolean;
