import { Params, AnyFunction } from './types'

export function before<F extends AnyFunction>(n: number, cb: F) {
  return (...val: Params<F>): ReturnType<F> | undefined => {
    return (--n >= 0) ? cb(...val) : undefined
  }
}
