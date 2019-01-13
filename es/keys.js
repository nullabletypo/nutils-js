import { has } from './has';
export function keys(obj) {
    const origin = Object.keys;
    return (origin ||
        ((src) => {
            const result = [];
            for (const key in src) {
                if (has.own(src, key)) {
                    result.push(key);
                }
            }
            return result;
        }))(obj);
}
//# sourceMappingURL=keys.js.map