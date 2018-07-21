import { parsePath } from './internal/parsePath';
import { getIn } from './getIn';
export const validateIn = (src, path, pred) => {
    const r = getIn(src, parsePath(path));
    return pred(r);
};
//# sourceMappingURL=validateIn.js.map