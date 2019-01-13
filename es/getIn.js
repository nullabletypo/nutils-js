import { parsePath } from './internal/parsePath';
import { isPlainObject } from './lang';
export const getIn = (src, path) => {
    try {
        const r = parsePath(path).reduce((acc, k) => acc[k], src);
        if (Array.isArray(r)) {
            return [...r];
        }
        if (isPlainObject(r)) {
            return Object.assign({}, r);
        }
        return r;
    }
    catch (_a) {
        return undefined;
    }
};
//# sourceMappingURL=getIn.js.map