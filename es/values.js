import { has } from './has';
export function values(obj) {
    const origin = Object.values;
    return (origin ||
        ((src) => {
            const result = [];
            for (const key in src) {
                if (has.own(src, key)) {
                    result.push(src[key]);
                }
            }
            return result;
        }))(obj);
}
//# sourceMappingURL=values.js.map