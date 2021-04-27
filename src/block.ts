export function block(args: string[]): string
export function block(...args: string[]): string
export function block(...args: any[]) {
  if (args.length === 1 && Array.isArray(args[0])) {
    return args[0].join('\n')
  }
  return args.join('\n')
}

export function inlineBlock(args: string[]): string
export function inlineBlock(...args: string[]): string
export function inlineBlock(...args: any[]) {
  if (args.length === 1 && Array.isArray(args[0])) {
    return args[0].join('')
  }
  return args.join('')
}
