import { parsePath } from './internal/parsePath';
import { rec } from './internal/rec';
export const updateIn = (src, path, patch) => {
    const target = typeof src === 'function' ? src() : src;
    return rec(target, parsePath(path), patch, 0);
};
//# sourceMappingURL=updateIn.js.map