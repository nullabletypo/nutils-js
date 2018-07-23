// import { AnyFunction as AF, Params as P } from './types'

// type R<F extends AF> = ReturnType<F>

// export const _ = Symbol('PLACEHOLDER')

// type _ = typeof _

// type F0 = () => any
// type F1 = (...v: [any]) => any
// type F2 = (...v: [any, any]) => any
// type F3 = (...v: [any, any, any]) => any
// type F4 = (...v: [any, any, any, any]) => any
// type F_ = (...v: [any?, any?, any?, any?]) => any

// // tslint:disable:unified-signatures
// interface BindFunciton {
//   /* arg-1 */
//   <F extends F1>(f: F): (...v: P<F>) => R<F>
//   <F extends F1>(f: F, ...v: P<F>): () => R<F>
//   <F extends F1>(f: F, v: _): (...v: P<F>) => R<F>
//   /* arg-2 */
//   <F extends F2>(f: F): (...v: P<F>) => R<F>
//   <F extends F2>(f: F, ...v: [P<F>[0]]): (b: P<F>[1]) => R<F>
//   <F extends F2>(f: F, ...v: [_]): (...v: P<F>) => R<F>
//   <F extends F2>(f: F, ...v: [_, P<F>[1]]): (a: P<F>[0]) => R<F>
//   <F extends F2>(f: F, ...v: P<F>): () => R<F>
//   /* arg-3 */
//   <F extends F3>(f: F): (...v: P<F>) => R<F>
//   <F extends F3>(f: F, ...v: [P<F>[0]]): (b: P<F>[1], c: P<F>[2]) => R<F>
//   <F extends F3>(f: F, ...v: [P<F>[0], P<F>[1]]): (c: P<F>[2]) => R<F>
//   <F extends F3>(f: F, ...v: [_]): (...v: P<F>) => R<F>
//   <F extends F3>(f: F, ...v: [_, P<F>[1]]): (a: P<F>[0], c: P<F>[2]) => R<F>
//   <F extends F3>(f: F, ...v: [_, _, P<F>[2]]): (a: P<F>[0], b: P<F>[1]) => R<F>
//   <F extends F3>(f: F, ...v: P<F>): () => R<F>
//   /* arg-4 */
//   <F extends F4>(f: F): (...v: P<F>) => R<F>
//   <F extends F4>(f: F, ...v: [P<F>[0]]): (b: P<F>[1], c: P<F>[2], d: P<F>[3]) => R<F>
//   <F extends F4>(f: F, ...v: [P<F>[0], P<F>[1]]): (c: P<F>[2], d: P<F>[3]) => R<F>
//   <F extends F4>(f: F, ...v: [P<F>[0], P<F>[1], P<F>[2]]): (d: P<F>[3]) => R<F>
//   <F extends F4>(f: F, ...v: [_]): (...v: P<F>) => R<F>
//   <F extends F4>(f: F, ...v: [_, P<F>[1]]): (a: P<F>[0], c: P<F>[2], d: P<F>[3]) => R<F>
//   <F extends F4>(f: F, ...v: [_, _, P<F>[2]]): (a: P<F>[0], b: P<F>[1], d: P<F>[3]) => R<F>
//   <F extends F4>(f: F, ...v: [_, _, _, P<F>[3]]): (a: P<F>[0], b: P<F>[1], c: P<F>[2]) => R<F>
//   <F extends F4>(f: F, ...v: [_, P<F>[1], _, P<F>[3]]): (a: P<F>[0], c: P<F>[2]) => R<F>
//   <F extends F4>(f: F, ...v: [P<F>[0], _, _, P<F>[3]]): (b: P<F>[1], c: P<F>[2]) => R<F>
//   <F extends F4>(f: F, ...v: P<F>): () => R<F>
//   /* optional-arg-4 */
//   // <F extends F_>(f: F): (...v: P<F>) => R<F>
//   // <F extends F_>(f: F, ...v: [P<F>[0]]): (b?: P<F>[1], c?: P<F>[2], d?: P<F>[3]) => R<F>
//   // <F extends F_>(f: F, ...v: [P<F>[0], P<F>[1]]): (c?: P<F>[2], d?: P<F>[3]) => R<F>
//   // <F extends F_>(f: F, ...v: [P<F>[0], P<F>[1], P<F>[2]]): (d?: P<F>[3]) => R<F>
//   // <F extends F_>(f: F, ...v: [_]): (...v: P<F>) => R<F>
//   // <F extends F_>(f: F, ...v: [_, P<F>[1]]): (a?: P<F>[0], c?: P<F>[2], d?: P<F>[3]) => R<F>
//   // <F extends F_>(f: F, ...v: [_, _, P<F>[2]]): (a?: P<F>[0], b?: P<F>[1], d?: P<F>[3]) => R<F>
//   // <F extends F_>(f: F, ...v: [_, _, _, P<F>[3]]): (a?: P<F>[0], b?: P<F>[1], c?: P<F>[2]) => R<F>
//   // <F extends F_>(f: F, ...v: [_, P<F>[1], _, P<F>[3]]): (a?: P<F>[0], c?: P<F>[2]) => R<F>
//   // <F extends F_>(f: F, ...v: [P<F>[0], _, _, P<F>[3]]): (b?: P<F>[1], c?: P<F>[2]) => R<F>
//   // <F extends F_>(f: F, ...v: P<F>): () => R<F>
//   /* arg-0 */
//   <F extends F0>(f: F): () => R<F>
// }


// /*
// const by = (a: number, b: number, c: number) => a * b * c
// cosnt bound = bind(by, [1, _, 2])
// bound(3) // 6
// */
// export const bind = ((fn: any, ...args: any[]) => {
//   return (...rest: any[]) => {
//     const src = [...args.map(el => el === _ ? rest.shift() : el), ...rest]
//     return fn.apply(null, src)
//   }
// }) as BindFunciton


// //
// // ─── TEST ───────────────────────────────────────────────────────────────────────
// //
// const f0 = () => ''
// const f1 = (a: string) => a
// const f2 = (a: string, b: number) => ({ a, b })
// const f3 = (a: string, b: number, c: boolean) => ({ a, b, c })

// /*
//   <F extends F1>(f: F): (...v: P<F>) => R<F>
//   <F extends F1>(f: F, ...v: P<F>): () => R<F>
//   <F extends F1>(f: F, v: _): (...v: P<F>) => R<F>
// */
// const a1 = bind(f1)
// const a2 = bind(f1, 'hello')
// const a3 = bind(f1, _)
// console.log({ a1: a1('hello'), a2: a2(), a3: a3('hello') })
// /*
//   <F extends F2>(f: F): (...v: P<F>) => R<F>
//   <F extends F2>(f: F, ...v: [P<F>[0]]): (b: P<F>[1]) => R<F>
//   <F extends F2>(f: F, ...v: [_]): (...v: P<F>) => R<F>
//   <F extends F2>(f: F, ...v: [_, P<F>[1]]): (a: P<F>[0]) => R<F>
//   <F extends F2>(f: F, ...v: P<F>): () => R<F>
//   */
// const b1 = bind(f2)
// const b2 = bind(f2, '')
// const b3 = bind(f2, _)
// const b4 = bind(f2, _, 1)
// const b5 = bind(f2, '', 1)
// console.log({ b1: b1('', 1), b2: b2(1), b3: b3('', 1), b4: b4(''), b5: b5() })
// /*
//   <F extends F3>(f: F): (...v: P<F>) => R<F>
//   <F extends F3>(f: F, ...v: [P<F>[0]]): (b: P<F>[1], c: P<F>[2]) => R<F>
//   <F extends F3>(f: F, ...v: [P<F>[0], P<F>[1]]): (c: P<F>[2]) => R<F>
//   <F extends F3>(f: F, ...v: [_]): (...v: P<F>) => R<F>
//   <F extends F3>(f: F, ...v: [_, P<F>[1]]): (a: P<F>[0], c: P<F>[2]) => R<F>
//   <F extends F3>(f: F, ...v: [_, _, P<F>[2]]): (a: P<F>[0], b: P<F>[1]) => R<F>
//   <F extends F3>(f: F, ...v: P<F>): () => R<F>
// */
// const c1 = bind(f3)
// const c2 = bind(f3, '')
// const c3 = bind(f3, '', 1)
// const c4 = bind(f3, _)
// const c5 = bind(f3, _, 1)
// const c6 = bind(f3, _, _, true)
// const c7 = bind(f3, '', 1, true)

// console.log({
//   c1: c1('', 1, true),
//   c2: c2(1, true),
//   c3: c3(true),
//   c4: c4('', 1, true),
//   c5: c5('', true),
//   c6: c6('', 1),
//   c7: c7(),
// })


// /*
//   <F extends F0>(f: F): () => R<F>
// */
// const d1 = bind(f0)
// console.log({ d1: d1() })!

// const f2_ = (a?: number, b?: string) => ({ a, b })
// const e1 = bind(f2_, _, '')
