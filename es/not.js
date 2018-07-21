/**
 * Create a pred function reversed it result
 */
export function not(f) {
    return (...val) => !Boolean(f(...val));
}
//# sourceMappingURL=not.js.map