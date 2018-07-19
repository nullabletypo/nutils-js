import { Func0, Func1, Func2, Func3 } from '../types';
interface ComposeFunction {
    (): <R>(a: R) => R;
    <F extends Function>(f: F): F;
    <A, R>(f1: Func1<A, R>, f2: Func0<A>): Func0<R>;
    <A, T1, R>(f1: Func1<A, R>, f2: Func1<T1, A>): Func1<T1, R>;
    <A, T1, T2, R>(f1: Func1<A, R>, f2: Func2<T1, T2, A>): Func2<T1, T2, R>;
    <A, T1, T2, T3, R>(f1: Func1<A, R>, f2: Func3<T1, T2, T3, A>): Func3<T1, T2, T3, R>;
    <A, B, R>(f1: Func1<B, R>, f2: Func1<A, B>, f3: Func0<A>): Func0<R>;
    <A, B, T1, R>(f1: Func1<B, R>, f2: Func1<A, B>, f3: Func1<T1, A>): Func1<T1, R>;
    <A, B, T1, T2, R>(f1: Func1<B, R>, f2: Func1<A, B>, f3: Func2<T1, T2, A>): Func2<T1, T2, R>;
    <A, B, T1, T2, T3, R>(f1: Func1<B, R>, f2: Func1<A, B>, f3: Func3<T1, T2, T3, A>): Func3<T1, T2, T3, R>;
    <A, B, C, R>(f1: Func1<C, R>, f2: Func1<B, C>, f3: Func1<A, B>, f4: Func0<A>): Func0<R>;
    <A, B, C, T1, R>(f1: Func1<C, R>, f2: Func1<B, C>, f3: Func1<A, B>, f4: Func1<T1, A>): Func1<T1, R>;
    <A, B, C, T1, T2, R>(f1: Func1<C, R>, f2: Func1<B, C>, f3: Func1<A, B>, f4: Func2<T1, T2, A>): Func2<T1, T2, R>;
    <A, B, C, T1, T2, T3, R>(f1: Func1<C, R>, f2: Func1<B, C>, f3: Func1<A, B>, f4: Func3<T1, T2, T3, A>): Func3<T1, T2, T3, R>;
}
export declare const compose: ComposeFunction;
export {};
