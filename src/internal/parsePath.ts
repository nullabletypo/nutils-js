type Path = string | (string | number)[]

export function parsePath(path: Path) {
  return (typeof path === 'string') ? path.split('.') : [...path].map(String)
}
