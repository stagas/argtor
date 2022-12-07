type Fn = (state: any) => any

function argsOf<T extends string>(fn: Fn) {
  const source = fn.toString()

  let x = source
  const d = x.indexOf('{') + 1
  if (!d || x.slice(0, d).includes(')'))
    return {
      keys: [],
      source
    }

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

  return {
    keys: x.split('}')[0]
      .split(',')
      .map((x) => x.split(/[^\w\s$]+/g)[0].trim() as T
      ),
    source
  }
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
export function argtor<T extends string>(
  fn: Fn & { fn?: Fn },
  keys = new Set<T>()
) {
  const args = argsOf<T>(fn?.fn ?? fn)
  args.keys.forEach(x => !x || keys.add(x))
  return Object.assign([...keys], { source: args.source })
}
