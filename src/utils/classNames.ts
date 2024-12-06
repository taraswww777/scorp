
export const classNames = (...args: Array<string | boolean | undefined>) => {
  return args.filter(v => !!v).join(' ')
}
