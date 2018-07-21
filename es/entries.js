import { has } from './has';
export function entries(obj) {
    const origin = Object.entries;
    return (origin || ((src) => {
        const result = [];
        for (const k in src) {
            if (has.own(obj, k)) {
                result.push([k, obj[k]]);
            }
        }
        return result;
    }))(obj);
}
//# sourceMappingURL=entries.js.map