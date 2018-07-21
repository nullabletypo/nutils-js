import { parsePath } from './internal/parsePath'
import { getIn } from './getIn'

interface HasInFunction {
  <T extends object, K extends keyof T>(src: (() => T) | T, path: K | [K]): boolean
  <T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    >(src: (() => T) | T, path: [K1, K2]): boolean
  <T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    >(src: (() => T) | T, path: [K1, K2, K3]): boolean
  <T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    >(src: (() => T) | T, path: [K1, K2, K3, K4]): boolean
  <T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    >(src: (() => T) | T, path: [K1, K2, K3, K4, K5]): boolean
  <T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5],
    >(src: (() => T) | T, path: [K1, K2, K3, K4, K5, K6]): boolean
  <T extends object>(src: (() => T) | T, path: string): boolean
}

export const hasIn: HasInFunction = <T extends object>(src: (() => T) | T, path: string | string[]): boolean => {
  const target: any = typeof src === 'function' ? src() : src
  const paths = parsePath(path)
  try {
    if (paths.length <= 1) {
      const [key] = paths
      return target.hasOwnProperty(key)
    } else {
      const rest = paths.slice(0, -1)
      const last = paths[paths.length - 1]
      return getIn(src, rest as any).hasOwnProperty(last)
    }
  } catch {
    return false
  }
}
