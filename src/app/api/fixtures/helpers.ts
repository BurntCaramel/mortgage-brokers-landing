export function buildMany<T>(
  count: number,
  creator: (id: number) => T
): Array<T> {
  return Array(count)
    .fill(null)
    .map((_, index) => creator(index));
}
