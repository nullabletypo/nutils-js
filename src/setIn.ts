import { parsePath } from './internal/parsePath'
import { rec } from './internal/rec'

interface SetInFunction {
  <T extends object, K extends keyof T, V extends T[K]>(
    src: (() => T) | T,
    path: K | [K],
    value: V,
  ): T
  <
    T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    V extends T[K1][K2]
  >(
    src: (() => T) | T,
    path: [K1, K2],
    value: V,
  ): T
  <
    T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    V extends T[K1][K2][K3]
  >(
    src: (() => T) | T,
    path: [K1, K2, K3],
    value: V,
  ): T
  <
    T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    V extends T[K1][K2][K3][K4]
  >(
    src: (() => T) | T,
    path: [K1, K2, K3, K4],
    value: V,
  ): T
  <
    T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    V extends T[K1][K2][K3][K4][K5]
  >(
    src: (() => T) | T,
    path: [K1, K2, K3, K4, K5],
    value: V,
  ): T
  <
    T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5],
    V extends T[K1][K2][K3][K4][K5][K6]
  >(
    src: (() => T) | T,
    path: [K1, K2, K3, K4, K5, K6],
    value: V,
  ): T
  <T extends object>(src: (() => T) | T, path: string, value: any): any
}

export const setIn: SetInFunction = <T>(
  src: (() => T) | T,
  path: string | string[],
  value: any,
) => {
  const target = typeof src === 'function' ? src() : src
  return rec(target, parsePath(path), value, 0)
}
