import { union } from 'lodash';

export const classNames = (...args: Array<string | boolean | undefined>) => {
  return union(args.filter(v => !!v).join(' ').split(' ')).join(' ');
}
