"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check if tagret in obj
 *
 * @export
 * @param {*} obj
 * @param {string} target
 * @returns
 */
function hasOwn(obj, target) {
    try {
        return obj.hasOwnProperty(target);
    }
    catch (_a) {
        return false;
    }
}
exports.hasOwn = hasOwn;
/* tslint:disable:no-shadowed-variable */
function omit(obj, keys) {
    keys = Array.isArray(keys) ? keys : [keys];
    const clone = Object.assign({}, obj);
    let i = -1;
    const len = keys.length;
    while (++i < len) {
        delete clone[keys[i]];
    }
    return clone;
}
exports.omit = omit;
function omitBy(src, pred) {
    const copy = Object.assign({}, src);
    Object.keys(src).forEach(k => {
        const v = copy[k];
        if (pred(v, k, src)) {
            delete copy[k];
        }
    });
    return copy;
}
exports.omitBy = omitBy;
/**
 * Create object by picked props from object.
 */
function pick(obj, keys) {
    keys = Array.isArray(keys) ? keys : [keys];
    const result = {};
    let i = -1;
    const len = keys.length;
    while (++i < len) {
        result[keys[i]] = obj[keys[i]];
    }
    return result;
}
exports.pick = pick;
/* tslint:enable:no-shadowed-variable */
/**
 * polyfil of Object.keys
 */
function keys(obj) {
    const origin = Object.keys;
    return (origin || ((src) => {
        const result = [];
        for (const key in src) {
            if (hasOwn(src, key)) {
                result.push(key);
            }
        }
        return result;
    }))(obj);
}
exports.keys = keys;
/**
 * polyfil of Object.values
 */
function values(obj) {
    const origin = Object.values;
    return (origin || ((src) => {
        const result = [];
        for (const key in src) {
            if (hasOwn(src, key)) {
                result.push(src[key]);
            }
        }
        return result;
    }))(obj);
}
exports.values = values;
/**
 * polyfil of Object.entries
 */
function entries(obj) {
    const origin = Object.entries;
    return (origin || ((src) => {
        const result = [];
        for (const k in src) {
            if (hasOwn(obj, k)) {
                result.push([k, obj[k]]);
            }
        }
        return result;
    }))(obj);
}
exports.entries = entries;
function mapKeys(src, fn) {
    const result = {};
    for (const key in src) {
        if (hasOwn(src, key)) {
            const val = src[key];
            const newKey = fn(val, key, src);
            result[newKey] = val;
        }
    }
    return result;
}
exports.mapKeys = mapKeys;
function mapValues(src, fn) {
    const result = {};
    for (const key in src) {
        if (hasOwn(src, key)) {
            const value = src[key];
            result[key] = fn(value, key, src);
        }
    }
    return result;
}
exports.mapValues = mapValues;
//# sourceMappingURL=index.js.map