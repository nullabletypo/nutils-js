/**
 * sleep N ms
 */
export function delay(ms = 0) {
    return new Promise(resolve => {
        const tid = setTimeout(() => {
            clearTimeout(tid);
            resolve();
        }, ms);
    });
}
//# sourceMappingURL=delay.js.map