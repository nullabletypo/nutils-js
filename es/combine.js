export const combine = ((...funcs) => {
    return (...val) => funcs.map(f => f(...val));
});
//# sourceMappingURL=combine.js.map