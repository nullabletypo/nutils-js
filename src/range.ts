/**
 * create array of numbers from start to end.
 */
export function range(end: number): number[]
export function range(start: number, end: number, step?: number): number[] //tslint:disable-line
export function range(x: number, y?: number, z = 1) {
  z = Math.abs(z) || 1
  const [start, end] = arguments.length === 1 ? [0, x] : [x, y!]
  const step = Math.sign(end - start) >= 0 ? z : (z * -1)
  let current = start
  const result: number[] = []
  const comparator = director(start, end)

  while (comparator(current)) {
    result.push(current)
    current += step
  }

  return result
}

function director(start: number, end: number) {
  return (start <= end)
    ? (n: number) => n <= end
    : (n: number) => n >= end
}
