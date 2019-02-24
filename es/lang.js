export function isString(value) {
    return typeof value === 'string';
}
export function isNumber(value) {
    return typeof value === 'number';
}
export function isUndefined(value) {
    return value === undefined;
}
export function isNull(value) {
    return value === null;
}
export function isVoid(value) {
    return value === undefined || value === null;
}
export function isBoolean(value) {
    return typeof value === 'boolean';
}
export function isSymbol(value) {
    return typeof value === 'symbol';
}
export function isArray(value) {
    return Array.isArray(value);
}
export function isPlainObject(obj) {
    return (obj instanceof Object && Object.getPrototypeOf(obj) === Object.prototype);
}
export function isObject(obj) {
    return obj === Object(obj);
}
export function isDate(value) {
    return value instanceof Date;
}
export function isError(value) {
    return value instanceof Error;
}
export function isMap(value) {
    return value instanceof Map;
}
export function isSet(value) {
    return value instanceof Set;
}
export function isWeakMap(value) {
    return value instanceof WeakMap;
}
export function isWeakSet(value) {
    return value instanceof WeakSet;
}
export function isFunction(value) {
    return typeof value === 'function';
}
export function isEmpty(value) {
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
export function isFalsy(value) {
    return !Boolean(value); // eslint-disable-line
}
export function isTruthy(value) {
    return Boolean(value);
}
//# sourceMappingURL=lang.js.map