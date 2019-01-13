import { parsePath } from './internal/parsePath';
import { rec } from './internal/rec';
export const updateIn = (src, path, patch) => {
    return rec(src, parsePath(path), patch, 0);
};
//# sourceMappingURL=updateIn.js.map