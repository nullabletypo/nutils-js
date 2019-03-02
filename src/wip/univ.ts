export const univ = <I extends any[], O>(
  onServer: (...src: I) => O,
  onClient: (...src: I) => O,
) => (...src: I) => {
  if (typeof window === 'undefined') {
    return onServer(...src)
  } else {
    return onClient(...src)
  }
}
