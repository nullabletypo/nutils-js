import { Cmp } from './types'

export function contains<T>(src: Iterable<T>, target: T, cmp: Cmp<T> = Object.is) {
  for (const el of src) {
    if (cmp(el, target)) {
      return true
    }
  }
  return false
}

/* alias */
export { contains as incluedes }
