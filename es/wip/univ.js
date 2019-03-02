export const univ = (onServer, onClient) => (...src) => {
    if (typeof window === 'undefined') {
        return onServer(...src);
    }
    else {
        return onClient(...src);
    }
};
//# sourceMappingURL=univ.js.map