export interface DeleteInFunction {
    <T extends object, K extends keyof T>(src: (() => T) | T, path: K | [K]): Partial<T>;
    <T extends object, K1 extends keyof T, K2 extends keyof T[K1]>(src: (() => T) | T, path: [K1, K2]): Partial<T>;
    <T extends object, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]>(src: (() => T) | T, path: [K1, K2, K3]): Partial<T>;
    <T extends object, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3]>(src: (() => T) | T, path: [K1, K2, K3, K4]): Partial<T>;
    <T extends object, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4]>(src: (() => T) | T, path: [K1, K2, K3, K4, K5]): Partial<T>;
    <T extends object, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4], K6 extends keyof T[K1][K2][K3][K4][K5]>(src: (() => T) | T, path: [K1, K2, K3, K4, K5, K6]): Partial<T>;
    <T extends object>(src: (() => T) | T, path: string): Partial<T>;
}
export declare const delIn: DeleteInFunction;
