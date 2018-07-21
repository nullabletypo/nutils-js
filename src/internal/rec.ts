export function rec(src: any, path: (string | number)[], value: any, idx: number) {
  let clone
  const key = path[idx]

  if (path.length > idx) {
    if (Array.isArray(src)) {
      clone = src.slice()
    } else {
      clone = { ...src }
    }
    clone[key] = rec(clone[key] !== undefined ? clone[key] : {}, path, value, idx + 1)
    return clone
  }
  return (typeof value === 'function') ? value(src) : value
}
