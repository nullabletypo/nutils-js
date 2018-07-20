import { AnyFunction, Params } from './types'

/**
 * Invoke callback at once
 */
export function once<F extends AnyFunction>(f: F) {
  let invoked = false
  return (...val: Params<F>): ReturnType<F> | undefined => {
    if (!invoked) {
      invoked = true
      return f(...val)
    }
    return undefined
  }
}
