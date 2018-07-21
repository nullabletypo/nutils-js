import { set } from './set';
export function pick(src, keys) {
    keys = Array.isArray(keys) ? keys : [keys];
    return keys.reduce((acc, key) => set(acc, key, src[key]), {});
}
//# sourceMappingURL=pick.js.map