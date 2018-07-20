/**
 * get global variables
 *
 * @export
 * @returns
 */
export function getGlobal() {
  return Function('return this')()
}
