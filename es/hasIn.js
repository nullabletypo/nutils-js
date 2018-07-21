import { parsePath } from './internal/parsePath';
import { getIn } from './getIn';
export const hasIn = (src, path) => {
    const target = typeof src === 'function' ? src() : src;
    const paths = parsePath(path);
    try {
        if (paths.length <= 1) {
            const [key] = paths;
            return target.hasOwnProperty(key);
        }
        else {
            const rest = paths.slice(0, -1);
            const last = paths[paths.length - 1];
            return getIn(src, rest).hasOwnProperty(last);
        }
    }
    catch (_a) {
        return false;
    }
};
//# sourceMappingURL=hasIn.js.map