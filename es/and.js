export const and = ((...funcs) => {
    return (val) => {
        for (const pred of funcs) {
            if (!pred(val)) {
                return false;
            }
        }
        return true;
    };
});
//# sourceMappingURL=and.js.map