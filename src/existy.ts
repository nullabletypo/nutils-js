/**
 * Check value is not undefined or null
 *
 * @export
 * @param {*} v
 * @returns {boolean}
 */
export function existy<T>(v: T | null | undefined): v is T {
  return v != null
}
