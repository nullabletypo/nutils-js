import { has } from './has';
export function mapValues(src, fn) {
    const result = {};
    for (const key in src) {
        if (has.own(src, key)) {
            const value = src[key];
            result[key] = fn(value, key, src);
        }
    }
    return result;
}
//# sourceMappingURL=mapValues.js.map