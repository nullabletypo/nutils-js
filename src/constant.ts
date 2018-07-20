export function constant<T>(v: T) {
  return (..._: any[]) => v
}
