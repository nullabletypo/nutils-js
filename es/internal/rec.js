export function rec(src, path, value, idx) {
    let clone;
    const key = path[idx];
    if (path.length > idx) {
        if (Array.isArray(src)) {
            clone = src.slice();
        }
        else {
            clone = Object.assign({}, src);
        }
        clone[key] = rec(clone[key] !== undefined ? clone[key] : {}, path, value, idx + 1);
        return clone;
    }
    return (typeof value === 'function') ? value(src) : value;
}
//# sourceMappingURL=rec.js.map