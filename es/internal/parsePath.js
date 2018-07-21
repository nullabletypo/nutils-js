export function parsePath(path) {
    return (typeof path === 'string') ? path.split('.') : [...path].map(String);
}
//# sourceMappingURL=parsePath.js.map