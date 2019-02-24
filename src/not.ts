import { Params, AnyFunction } from './types'

/**
 * Create a pred function reversed it result
 */
export function not<F extends AnyFunction>(f: F) {
  return (...val: Params<F>): boolean => !Boolean(f(...val)) // eslint-disable-line
}
