interface UpdateInFunction {
    <T extends object, K extends keyof T, V extends T[K], R extends V>(src: T, path: K | [K], patch: (value: V) => R): T;
    <T extends object, K1 extends keyof T, K2 extends keyof T[K1], V extends T[K1][K2], R extends V>(src: T, path: [K1, K2], patch: (value: V) => R): T;
    <T extends object, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], V extends T[K1][K2][K3], R extends V>(src: T, path: [K1, K2, K3], patch: (value: V) => R): T;
    <T extends object, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], V extends T[K1][K2][K3][K4], R extends V>(src: T, path: [K1, K2, K3, K4], patch: (value: V) => R): T;
    <T extends object, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4], V extends T[K1][K2][K3][K4][K5], R extends V>(src: T, path: [K1, K2, K3, K4, K5], patch: (value: V) => R): T;
    <T extends object, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4], K6 extends keyof T[K1][K2][K3][K4][K5], V extends T[K1][K2][K3][K4][K5][K6], R extends V>(src: T, path: [K1, K2, K3, K4, K5, K6], patch: (value: V) => R): T;
    <T extends object>(src: T, path: string, patch: (value: any) => any): any;
}
export declare const updateIn: UpdateInFunction;
export {};
