import { once } from './once';
export function after(n, cb) {
    cb = once(cb);
    return (...val) => {
        return (--n > 0) ? undefined : cb(...val);
    };
}
//# sourceMappingURL=after.js.map