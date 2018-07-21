/**
 * Invoke callback at once
 */
export function once(f) {
    let invoked = false;
    return (...val) => {
        if (!invoked) {
            invoked = true;
            return f(...val);
        }
        return undefined;
    };
}
//# sourceMappingURL=once.js.map