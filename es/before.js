export function before(n, cb) {
    return (...val) => {
        return (--n >= 0) ? cb(...val) : undefined;
    };
}
//# sourceMappingURL=before.js.map