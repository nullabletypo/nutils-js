"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lang_1 = require("./lang");
const constant_1 = require("./constant");
const _conforms = (predMap) => {
    return (val) => {
        if (!lang_1.isObject(val)) {
            return false;
        }
        try {
            for (const key in predMap) {
                const pred = predMap[key];
                const v = val[key];
                if (!(key in val) || !pred(v)) {
                    return false;
                }
            }
        }
        catch (_a) {
            return false;
        }
        return true;
    };
};
const skipProd = (predMap) => {
    if (process.env.NODE_ENV === 'production') {
        return constant_1.constant(true);
    }
    return _conforms(predMap);
};
exports.conforms = Object.assign(_conforms, { skipProd });
//# sourceMappingURL=conforms.js.map