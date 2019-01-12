/**
 * sleep N ms
 */
export function delay(ms = 0) {
  return new Promise<void>(resolve => {
    const tid = setTimeout(() => {
      clearTimeout(tid)
      resolve()
    }, ms)
  })
}
