import { identity } from '../utils';
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
export function contains(arr, target, cmp = Object.is) {
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
/* alias */
export { contains as incluedes };
/*  */
/**
 * Create non-duplicated array
 * @template T
 * @param {T[]} arr
 * @param {(a: T, b: T) = boolean} [cmp=Object.is]
 * @returns {T[]}
 */
export function unique(arr, cmp = Object.is) {
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
export function intersection(a, b, cmp = Object.is) {
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
export function difference(a, b, cmp = Object.is) {
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
export function makeHashGroup(arr, key) {
    return arr.reduce((acc, obj) => {
        acc[obj[key]] = obj;
        return acc;
    }, {}); // tslint:disable-line
}
export function range(x, y, z = 1) {
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
(function (range) {
    function director(start, end) {
        return (start <= end)
            ? (n) => n <= end
            : (n) => n >= end;
    }
    range.director = director;
})(range || (range = {}));
// tslint:enable:unified-signatures
/**
 * create an array removed falsy value.
 *
 * @export
 * @template T
 * @param {((T | Falsy)[])} arr
 * @returns {T[]}
 */
export function compact(arr) {
    return arr.filter(Boolean);
}
/**
 * flat array with optional mapper
 * @param arr
 * @param mapper
 */
export function flatten(arr, mapper = identity) {
    return _flatten(arr, mapper, []);
}
function _flatten(arr, mapper = identity, acc) {
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