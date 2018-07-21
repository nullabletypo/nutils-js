import { idx } from './idx';
import { values } from './values';
export function unique(src, getKey) {
    if (getKey == undefined) {
        return Array.from(new Set(src));
    }
    return values(idx(src, { key: getKey }));
}
//# sourceMappingURL=unique.js.map