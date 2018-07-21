/**
 * Check if tagret in obj
 *
 * @export
 * @param {*} obj
 * @param {string} target
 * @returns
 */
declare function _has(obj: any, key: string): boolean;
declare function own(obj: any, key: string): boolean;
export declare const has: typeof _has & {
    own: typeof own;
};
export {};
