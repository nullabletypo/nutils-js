export declare function mapValues<T, K extends keyof T, U>(src: T, fn: (value: T[K], key: K, src: Readonly<T>) => U): {
    [P in K]: U;
};
