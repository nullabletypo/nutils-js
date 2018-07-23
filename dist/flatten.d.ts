declare type Flatten<T> = T extends (infer U)[] ? U : T;
declare type Flatten5<T> = Flatten<Flatten<Flatten<Flatten<Flatten<T>>>>>;
declare type Flatten10<T> = Flatten5<Flatten5<T>>;
declare type DF<T> = Flatten10<Flatten10<Flatten10<Flatten10<Flatten10<T>>>>>;
interface Mapper<T, U> {
    (val: DF<T>): U;
}
export declare function flatten<T extends any[], U = DF<T>>(src: T, mapper?: Mapper<T, U>): U[];
export {};
