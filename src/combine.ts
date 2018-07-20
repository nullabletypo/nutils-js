import { Func as F, AnyFunction } from './types'

interface Combine {
  <T extends any[], R1>(f1: F<T, R1>): F<T, [R1]>
  <T extends any[], R1, R2>(f1: F<T, R1>, f2: F<T, R2>): F<T, [R1, R2]>
  <T extends any[], R1, R2, R3>(f1: F<T, R1>, f2: F<T, R2>, f3: F<T, R3>): F<T, [R1, R2, R3]>
  <T extends any[], R1, R2, R3, R4>(f1: F<T, R1>, f2: F<T, R2>, f3: F<T, R3>, f4: F<T, R4>): F<T, [R1, R2, R3, R4]>
  <T extends any[], R1, R2, R3, R4, R5>(
    f1: F<T, R1>,
    f2: F<T, R2>,
    f3: F<T, R3>,
    f4: F<T, R4>,
    f5: F<T, R5>,
  ): F<T, [R1, R2, R3, R4, R5]>
  <T extends any[], R1, R2, R3, R4, R5, R6>(
    f1: F<T, R1>,
    f2: F<T, R2>,
    f3: F<T, R3>,
    f4: F<T, R4>,
    f5: F<T, R5>,
    f6: F<T, R6>,
  ): F<T, [R1, R2, R3, R4, R5, R6]>
  <T extends any[], R1, R2, R3, R4, R5, R6, R7>(
    f1: F<T, R1>,
    f2: F<T, R2>,
    f3: F<T, R3>,
    f4: F<T, R4>,
    f5: F<T, R5>,
    f6: F<T, R6>,
    f7: F<T, R7>,
  ): F<T, [R1, R2, R3, R4, R5, R6, R7]>
}

export const combine = ((...funcs: AnyFunction[]) => {
  return (...val: any[]) => funcs.map(f => f(...val))
}) as Combine
