import { parsePath } from './internal/parsePath';
import { rec } from './internal/rec';
export const setIn = (src, path, value) => {
    const target = typeof src === 'function' ? src() : src;
    return rec(target, parsePath(path), value, 0);
};
//# sourceMappingURL=setIn.js.map