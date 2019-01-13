import { parsePath } from './internal/parsePath'
import { omit } from './omit'
import { updateIn } from './updateIn'

interface DeleteInFunction {
  <T extends object, K extends keyof T>(src: T, path: K | [K]): Partial<T>
  <T extends object, K1 extends keyof T, K2 extends keyof T[K1]>(
    src: T,
    path: [K1, K2],
  ): Partial<T>
  <
    T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2]
  >(
    src: T,
    path: [K1, K2, K3],
  ): Partial<T>
  <
    T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3]
  >(
    src: T,
    path: [K1, K2, K3, K4],
  ): Partial<T>
  <
    T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4]
  >(
    src: T,
    path: [K1, K2, K3, K4, K5],
  ): Partial<T>
  <
    T extends object,
    K1 extends keyof T,
    K2 extends keyof T[K1],
    K3 extends keyof T[K1][K2],
    K4 extends keyof T[K1][K2][K3],
    K5 extends keyof T[K1][K2][K3][K4],
    K6 extends keyof T[K1][K2][K3][K4][K5]
  >(
    src: T,
    path: [K1, K2, K3, K4, K5, K6],
  ): Partial<T>
  <T extends object>(src: T, path: string): Partial<T>
}

export const delIn: DeleteInFunction = <T extends object>(
  src: T,
  path: string | string[],
) => {
  const _path = parsePath(path)
  return updateIn(src, _path.slice(0, -1) as any, (o: any) => {
    const target = _path[_path.length - 1]
    return Array.isArray(o)
      ? o.filter((_x, i) => i !== Number(target))
      : omit(o, `${target}`)
  })
}
