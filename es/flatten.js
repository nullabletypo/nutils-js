import { identity } from './identity';
export function flatten(src, mapper = identity) {
    function transform(acc, el) {
        if (Array.isArray(el)) {
            return el.reduce(transform, acc);
        }
        acc.push(mapper(el));
        return acc;
    }
    return src.reduce(transform, []);
}
//# sourceMappingURL=flatten.js.map