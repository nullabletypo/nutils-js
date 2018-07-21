import { isObject } from './lang';
import { constant } from './constant';
const _conforms = (predMap) => {
    return (val) => {
        if (!isObject(val)) {
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
        return constant(true);
    }
    return _conforms(predMap);
};
export const conforms = Object.assign(_conforms, { skipProd });
//# sourceMappingURL=conforms.js.map