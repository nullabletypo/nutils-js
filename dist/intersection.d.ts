declare type KM<T> = (el: T) => string;
export declare function intersection<T>(a: T[], b: T[], getKey?: KM<T>): T[];
export {};
