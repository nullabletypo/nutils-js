import { Params, AnyFunction } from './types'
import { once } from './once'

export function after<F extends AnyFunction>(n: number, cb: F) {
  cb = once(cb) as F
  return (...val: Params<F>): ReturnType<F> | undefined => {
    return (--n > 0) ? undefined : cb(...val)
  }
}

