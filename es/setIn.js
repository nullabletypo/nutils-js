import { parsePath } from './internal/parsePath';
import { rec } from './internal/rec';
export const setIn = (src, path, value) => {
    return rec(src, parsePath(path), value, 0);
};
//# sourceMappingURL=setIn.js.map