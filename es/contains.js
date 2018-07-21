export function contains(src, target, cmp = Object.is) {
    for (const el of src) {
        if (cmp(el, target)) {
            return true;
        }
    }
    return false;
}
/* alias */
export { contains as incluedes };
//# sourceMappingURL=contains.js.map