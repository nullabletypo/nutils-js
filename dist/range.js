"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function director(start, end) {
    return start <= end ? (n) => n <= end : (n) => n >= end;
}
function range(x, y, z = 1) {
    z = Math.abs(z) || 1;
    const [start, end] = arguments.length === 1 ? [0, x] : [x, y];
    const step = Math.sign(end - start) >= 0 ? z : z * -1;
    let current = start;
    const result = [];
    const comparator = director(start, end);
    while (comparator(current)) {
        result.push(current);
        current += step;
    }
    return result;
}
exports.range = range;
//# sourceMappingURL=range.js.map