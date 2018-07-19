"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
/**
 * Check if value in array using by comparator.
 *
 * @export
 * @template T
 * @param {T[]} arr
 * @param {T} target
 * @param {(a: T, b: T) => boolean} [cmp=Object.is]
 * @returns
 */
function contains(arr, target, cmp = Object.is) {
    let result = false;
    let i = -1;
    const len = arr.length;
    while (++i < len) {
        if (cmp(arr[i], target)) {
            result = true;
            break;
        }
    }
    return result;
}
exports.contains = contains;
exports.incluedes = contains;
/*  */
/**
 * Create non-duplicated array
 * @template T
 * @param {T[]} arr
 * @param {(a: T, b: T) = boolean} [cmp=Object.is]
 * @returns {T[]}
 */
function unique(arr, cmp = Object.is) {
    const r = [];
    let i = -1;
    const len = arr.length;
    while (++i < len) {
        if (!contains(r, arr[i], cmp)) {
            r.push(arr[i]);
        }
    }
    return r;
}
exports.unique = unique;
/**
 * intersection (a & b)
 *
 * @export
 * @template T
 * @param {T[]} a
 * @param {T[]} b
 * @param {(x: T, y: T) => boolean} [cmp=Object.is]
 * @returns {T[]}
 */
function intersection(a, b, cmp = Object.is) {
    const r = [];
    let i = -1;
    const len = a.length;
    while (++i < len) {
        if (contains(b, a[i], cmp)) {
            r.push(a[i]);
        }
    }
    return unique(r);
}
exports.intersection = intersection;
/**
 * defference (a - b)
 *
 * @export
 * @template T
 * @param {T[]} a
 * @param {T[]} b
 * @param {(x: T, y: T) => boolean} [cmp=Object.is]
 * @returns {T[]}
 */
function difference(a, b, cmp = Object.is) {
    const r = [];
    let i = -1;
    const len = a.length;
    while (++i < len) {
        if (!contains(b, a[i], cmp)) {
            r.push(a[i]);
        }
    }
    return unique(r);
}
exports.difference = difference;
/**
 * Transform to kv hash from array of object
 *
 * @export
 * @template T
 * @template K
 * @param {T[]} arr
 * @param {K} key
 * @returns {{ [k: string]: T }}
 */
function makeHashGroup(arr, key) {
    return arr.reduce((acc, obj) => {
        acc[obj[key]] = obj;
        return acc;
    }, {}); // tslint:disable-line
}
exports.makeHashGroup = makeHashGroup;
function range(x, y, z = 1) {
    z = Math.abs(z) || 1;
    const [start, end] = arguments.length === 1 ? [0, x] : [x, y];
    const step = Math.sign(end - start) >= 0 ? z : (z * -1);
    let current = start;
    const result = [];
    const comparator = range.director(start, end);
    while (comparator(current)) {
        result.push(current);
        current += step;
    }
    return result;
}
exports.range = range;
(function (range) {
    function director(start, end) {
        return (start <= end)
            ? (n) => n <= end
            : (n) => n >= end;
    }
    range.director = director;
})(range = exports.range || (exports.range = {}));
// tslint:enable:unified-signatures
/**
 * create an array removed falsy value.
 *
 * @export
 * @template T
 * @param {((T | Falsy)[])} arr
 * @returns {T[]}
 */
function compact(arr) {
    return arr.filter(Boolean);
}
exports.compact = compact;
/**
 * flat array with optional mapper
 * @param arr
 * @param mapper
 */
function flatten(arr, mapper = utils_1.identity) {
    return _flatten(arr, mapper, []);
}
exports.flatten = flatten;
function _flatten(arr, mapper = utils_1.identity, acc) {
    let i = -1;
    const len = arr.length;
    while (++i < len) {
        const x = arr[i];
        if (Array.isArray(x)) {
            _flatten(x, mapper, acc);
        }
        else {
            acc.push(mapper(x));
        }
    }
    return acc;
}
//# sourceMappingURL=index.js.map