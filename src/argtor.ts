const argsOf = (x: string): string[] => {
  const d = x.indexOf('{') + 1
  if (!d || x.slice(0, d).includes(')')) return []
  x = x.slice(d)
  let match
  do {
    match = false
    x = x.replace(
      /`((\\`)?[^`])+?`|'((\\')?[^'])+?'|"((\\")?[^"])+?"|\([^{[(]*?\)|\{[^{[(]*?\}|\[[^{[(]*?\]/g,
      () => {
        match = true
        return ''
      }
    )
  } while (match)
  return x.split('}')[0].split(',').map(x => x.split(/[^\w\s$]+/g)[0].trim())
}

/**
 * Extract destructured argument names from `fn`'s first argument and return a `Set` of `keys`.
 *
 * ```ts
 * const fn = ({ foo, bar }) => void 0
 * argtor(fn) // => Set(2) {'foo', 'bar'}
 * ```
 *
 * @param fn The function to extract argument keys from.
 * @param keys A keys `Set` to fill in with the argument names.
 * @returns The keys `Set` with the argument names.
 */
export const argtor = (
  fn: (state: any) => any,
  keys = new Set<string>(),
) => (argsOf('' + fn).forEach(x => !x || keys.add(x)), keys)
