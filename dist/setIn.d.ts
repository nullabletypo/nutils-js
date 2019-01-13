interface SetInFunction {
    <T extends object, K extends keyof T, V extends T[K]>(src: T, path: K | [K], value: V): T;
    <T extends object, K1 extends keyof T, K2 extends keyof T[K1], V extends T[K1][K2]>(src: T, path: [K1, K2], value: V): T;
    <T extends object, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], V extends T[K1][K2][K3]>(src: T, path: [K1, K2, K3], value: V): T;
    <T extends object, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], V extends T[K1][K2][K3][K4]>(src: T, path: [K1, K2, K3, K4], value: V): T;
    <T extends object, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4], V extends T[K1][K2][K3][K4][K5]>(src: T, path: [K1, K2, K3, K4, K5], value: V): T;
    <T extends object, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4], K6 extends keyof T[K1][K2][K3][K4][K5], V extends T[K1][K2][K3][K4][K5][K6]>(src: T, path: [K1, K2, K3, K4, K5, K6], value: V): T;
    <T extends object>(src: T, path: string, value: any): any;
}
export declare const setIn: SetInFunction;
export {};
