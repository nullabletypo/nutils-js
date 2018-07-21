"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isString(value) {
    return typeof value === 'string';
}
exports.isString = isString;
function isNumber(value) {
    return typeof value === 'number';
}
exports.isNumber = isNumber;
function isUndefined(value) {
    return value === undefined;
}
exports.isUndefined = isUndefined;
function isNull(value) {
    return value === null;
}
exports.isNull = isNull;
function isVoid(value) {
    return (value === undefined) || (value === null);
}
exports.isVoid = isVoid;
function isBoolean(value) {
    return typeof value === 'boolean';
}
exports.isBoolean = isBoolean;
function isSymbol(value) {
    return typeof value === 'symbol';
}
exports.isSymbol = isSymbol;
function isArray(value) {
    return Array.isArray(value);
}
exports.isArray = isArray;
function isPlainObject(obj) {
    return obj instanceof Object && Object.getPrototypeOf(obj) === Object.prototype;
}
exports.isPlainObject = isPlainObject;
function isObject(obj) {
    return obj === Object(obj);
}
exports.isObject = isObject;
function isDate(value) {
    return value instanceof Date;
}
exports.isDate = isDate;
function isError(value) {
    return value instanceof Error;
}
exports.isError = isError;
function isMap(value) {
    return value instanceof Map;
}
exports.isMap = isMap;
function isSet(value) {
    return value instanceof Set;
}
exports.isSet = isSet;
function isWeakMap(value) {
    return value instanceof WeakMap;
}
exports.isWeakMap = isWeakMap;
function isWeakSet(value) {
    return value instanceof WeakSet;
}
exports.isWeakSet = isWeakSet;
function isFunction(value) {
    return typeof value === 'function';
}
exports.isFunction = isFunction;
function isEmpty(value) {
    const v = value;
    switch (typeof v) {
        case 'number':
        case 'boolean':
        case 'undefined':
            return true;
        case 'string':
        case 'symbol':
        case 'function':
        case 'object':
            if (isNull(v)) {
                return true;
            }
            // Array / ArrayLike / Map / Set
            if (v[Symbol.iterator]) {
                return Array.from(v).length <= 0;
            }
            // the others object
            return Object.keys(v).length <= 0;
        default:
            return false;
    }
}
exports.isEmpty = isEmpty;
function isFalsy(value) {
    return !Boolean(value);
}
exports.isFalsy = isFalsy;
function isTruthy(value) {
    return Boolean(value);
}
exports.isTruthy = isTruthy;
//# sourceMappingURL=lang.js.map