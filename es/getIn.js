import { parsePath } from './internal/parsePath';
import { isPlainObject } from './lang';
export const getIn = (src, path) => {
    const target = typeof src === 'function' ? src() : src;
    try {
        const r = parsePath(path).reduce((acc, k) => acc[k], target);
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