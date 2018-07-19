"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check value is not undefined or null
 *
 * @export
 * @param {*} v
 * @returns {boolean}
 */
function existy(v) {
    return !(v === null || v === undefined);
}
exports.existy = existy;
/**
 * Return same value that passed as the arguments.
 *
 * @export
 * @template T
 * @param {T} value
 * @returns {T}
 */
function identity(value, ..._) {
    return value;
}
exports.identity = identity;
/**
 * Return function that return same value constantly.
 *
 * @export
 * @template T
 * @param {T} v
 * @returns {(...v[]) => T}
 */
function constant(v) {
    return (..._) => v;
}
exports.constant = constant;
/**
 * no operation function
 *
 * @export
 */
function noop(..._args) { }
exports.noop = noop;
/**
 * Add prefix
 *
 * @export
 * @param {string} prefix
 * @returns {(s: string) => string}
 */
function prefixer(prefix) {
    return (str) => prefix + str;
}
exports.prefixer = prefixer;
function bundle(...fns) {
    return bundled;
    function bundled() {
        fns.forEach(f => f.apply(this, arguments));
    }
}
exports.bundle = bundle;
__export(require("./compose"));
/**
 * Invoke function once
 *
 * @export
 * @template F
 * @param {F} f
 * @returns {F}
 */
function once(f) {
    let invoked = false;
    return wrapped;
    function wrapped() {
        if (!invoked) {
            invoked = true;
            return f.apply(this, arguments);
        }
    }
}
exports.once = once;
function afterOnce(n, callback, init = []) {
    let invoked = false;
    let count = 0;
    return (n <= 0) ? constant(awaiter)(callback.apply(null, init)) : awaiter;
    function awaiter() {
        if (invoked) {
            return;
        }
        count = count + 1;
        if (n === count) {
            invoked = true;
            callback.apply(this, arguments);
        }
    }
}
exports.afterOnce = afterOnce;
/**
 * get global variables
 *
 * @export
 * @returns
 */
function getGlobal() {
    return Function('return this')();
}
exports.getGlobal = getGlobal;
/**
 * sleep N ms
 *
 * @export
 * @param {number} [ms=0]
 * @returns
 */
function delay(ms = 0) {
    return new Promise(resolve => {
        const tid = setTimeout(() => {
            clearTimeout(tid);
            resolve();
        }, ms); // tslint:disable-line
    });
}
exports.delay = delay;
/**
 * Create a function that predicate a source and interface
 *
 * @template T
 * @param {conforms.PredicateMap<T>} predicatemap
 * @returns {Function}
 */
function conforms(predicatemap) {
    const keys = Object.keys(predicatemap);
    const len = keys.length;
    return function predicate(value) {
        let i = -1;
        try {
            while (++i < len) {
                const k = keys[i];
                const fn = predicatemap[k];
                if (!existy(value) || !(k in value) || !fn(value[k])) {
                    return false;
                }
            }
        }
        catch (_a) {
            return false;
        }
        return true;
    };
}
exports.conforms = conforms;
(function (conforms) {
    function skipProd(predicatemap) {
        if (process.env.NODE_ENV === 'production') {
            return constant(true);
        }
        return conforms(predicatemap);
    }
    conforms.skipProd = skipProd;
})(conforms = exports.conforms || (exports.conforms = {}));
function not(f) {
    return function () {
        return !Boolean(f.apply(this, arguments));
    };
}
exports.not = not;
function or(...funcs) {
    const len = funcs.length;
    return function predicate(v) {
        let i = -1;
        while (++i < len) {
            if (funcs[i](v)) {
                return true;
            }
        }
        return false;
    };
}
exports.or = or;
function and(...funcs) {
    const len = funcs.length;
    return function predicate(v) {
        let i = -1;
        while (++i < len) {
            if (!funcs[i](v)) {
                return false;
            }
        }
        return true;
    };
}
exports.and = and;
//# sourceMappingURL=index.js.map