export const or = ((...funcs) => {
    return ((val) => {
        for (const f of funcs) {
            if (f(val)) {
                return true;
            }
        }
        return false;
    });
});
//# sourceMappingURL=or.js.map