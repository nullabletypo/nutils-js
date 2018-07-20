import { Func as F, AnyFunction } from './types'

interface ComposeRigth {
  (): <R>(a: R) => R
  <Fn extends AnyFunction>(f: Fn): Fn
  <T extends any[], A, R>(f1: F<[A], R>, f2: F<T, A>): F<T, R>
  <T extends any[], A, B, R>(f1: F<[B], R>, f2: F<[A], B>, f3: F<T, A>): F<T, R>
  <T extends any[], A, B, C, R>(f1: F<[C], R>, f2: F<[B], C>, f3: F<[A], B>, f4: F<T, A>): F<T, R>
  <T extends any[], A, B, C, D, R>(f1: F<[D], R>, f2: F<[C], D>, f3: F<[B], C>, f4: F<[A], B>, f5: F<T, A>): F<T, R>
}

interface ComposeLeft {
  (): <R>(a: R) => R
  <Fn extends AnyFunction>(f: Fn): Fn
  <T extends any[], A, R>(f1: F<T, A>, f2: F<[A], R>): F<T, R>
  <T extends any[], A, B, R>(f1: F<T, A>, f2: F<[A], B>, f3: F<[B], R>): F<T, R>
  <T extends any[], A, B, C, R>(f1: F<T, A>, f2: F<[A], B>, f3: F<[B], C>, f4: F<[C], R>): F<T, R>
  <T extends any[], A, B, C, D, R>(f1: F<T, A>, f2: F<[A], B>, f3: F<[B], C>, f4: F<[C], D>, f5: F<[D], R>): F<T, R>
}

type Composer<T> = T extends 'RIGHT' ? ComposeRigth : ComposeLeft

const composer = <T extends 'RIGHT' | 'LEFT'>(direction: T) => ((...funcs: AnyFunction[]) => {
  if (funcs.length === 0) {
    return (arg: any) => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  const targets = direction === 'LEFT' ? [...funcs].reverse() : funcs
  return targets.reduce((a, b) => (...args: any[]) => a(b(...args)))
}) as Composer<T>

const right = composer('RIGHT')
const left = composer('LEFT')
export const compose = Object.assign(left, { right })
