import { Pred } from './types';
declare type PredMap<T> = {
    [K in keyof T]: Pred<T[K]>;
};
export declare const conforms: (<T>(predMap: PredMap<T>) => (val: any) => val is T) & {
    skipProd: <T>(predMap: PredMap<T>) => Pred<T>;
};
export {};
