import { identity } from './identity';
export function flatten(src, mapper = identity) {
    return src.reduce(transform, []);
    function transform(acc, el) {
        if (Array.isArray(el)) {
            return el.reduce(transform, acc);
        }
        acc.push(mapper(el));
        return acc;
    }
}
//# sourceMappingURL=flatten.js.map