import { parsePath } from './internal/parsePath';
import { omit } from './omit';
import { updateIn } from './updateIn';
export const delIn = (src, path) => {
    const _path = parsePath(path);
    return updateIn(src, _path.slice(0, -1), (o) => {
        const target = _path[_path.length - 1];
        return Array.isArray(o) ? o.filter((_x, i) => i !== Number(target)) : omit(o, `${target}`);
    });
};
//# sourceMappingURL=delIn.js.map