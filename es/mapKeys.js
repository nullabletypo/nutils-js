import { has } from './has';
export function mapKeys(src, fn) {
    const result = {};
    for (const key in src) {
        if (has.own(src, key)) {
            const val = src[key];
            const newKey = fn(val, key, src);
            result[newKey] = val;
        }
    }
    return result;
}
//# sourceMappingURL=mapKeys.js.map