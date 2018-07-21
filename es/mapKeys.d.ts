export declare function mapKeys<T, K extends keyof T, U extends string>(src: T, fn: (value: T[K], key: K, src: Readonly<T>) => U): {
    [P in U]: T[K];
};
