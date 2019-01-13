interface HasInFunction {
    <T extends object, K extends keyof T>(src: T, path: K | [K]): boolean;
    <T extends object, K1 extends keyof T, K2 extends keyof T[K1]>(src: T, path: [K1, K2]): boolean;
    <T extends object, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]>(src: T, path: [K1, K2, K3]): boolean;
    <T extends object, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3]>(src: T, path: [K1, K2, K3, K4]): boolean;
    <T extends object, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4]>(src: T, path: [K1, K2, K3, K4, K5]): boolean;
    <T extends object, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3], K5 extends keyof T[K1][K2][K3][K4], K6 extends keyof T[K1][K2][K3][K4][K5]>(src: T, path: [K1, K2, K3, K4, K5, K6]): boolean;
    <T extends object>(src: T, path: string): boolean;
}
export declare const hasIn: HasInFunction;
export {};
