/**
 * Check if tagret in obj
 *
 * @export
 * @param {*} obj
 * @param {string} target
 * @returns
 */
function _has(obj: any, key: string): boolean {
  try {
    return key in obj
  } catch (error) {
    return false
  }
}

function own(obj: any, key: string): boolean {
  try {
    return obj.hasOwnProperty(key)
  } catch (error) {
    return false
  }
}

export const has = Object.assign(_has, { own })
