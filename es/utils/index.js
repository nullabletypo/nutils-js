/**
 * Check value is not undefined or null
 *
 * @export
 * @param {*} v
 * @returns {boolean}
 */
export function existy(v) {
    return !(v === null || v === undefined);
}
/**
 * Return same value that passed as the arguments.
 *
 * @export
 * @template T
 * @param {T} value
 * @returns {T}
 */
export function identity(value, ..._) {
    return value;
}
/**
 * Return function that return same value constantly.
 *
 * @export
 * @template T
 * @param {T} v
 * @returns {(...v[]) => T}
 */
export function constant(v) {
    return (..._) => v;
}
/**
 * no operation function
 *
 * @export
 */
export function noop(..._args) { }
/**
 * Add prefix
 *
 * @export
 * @param {string} prefix
 * @returns {(s: string) => string}
 */
export function prefixer(prefix) {
    return (str) => prefix + str;
}
export function bundle(...fns) {
    return bundled;
    function bundled() {
        fns.forEach(f => f.apply(this, arguments));
    }
}
export * from './compose';
/**
 * Invoke function once
 *
 * @export
 * @template F
 * @param {F} f
 * @returns {F}
 */
export function once(f) {
    let invoked = false;
    return wrapped;
    function wrapped() {
        if (!invoked) {
            invoked = true;
            return f.apply(this, arguments);
        }
    }
}
export function afterOnce(n, callback, init = []) {
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
/**
 * get global variables
 *
 * @export
 * @returns
 */
export function getGlobal() {
    return Function('return this')();
}
/**
 * sleep N ms
 *
 * @export
 * @param {number} [ms=0]
 * @returns
 */
export function delay(ms = 0) {
    return new Promise(resolve => {
        const tid = setTimeout(() => {
            clearTimeout(tid);
            resolve();
        }, ms); // tslint:disable-line
    });
}
/**
 * Create a function that predicate a source and interface
 *
 * @template T
 * @param {conforms.PredicateMap<T>} predicatemap
 * @returns {Function}
 */
export function conforms(predicatemap) {
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
(function (conforms) {
    function skipProd(predicatemap) {
        if (process.env.NODE_ENV === 'production') {
            return constant(true);
        }
        return conforms(predicatemap);
    }
    conforms.skipProd = skipProd;
})(conforms || (conforms = {}));
export function not(f) {
    return function () {
        return !Boolean(f.apply(this, arguments));
    };
}
export function or(...funcs) {
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
export function and(...funcs) {
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
//# sourceMappingURL=index.js.map