import { quote } from '@spare/quote'

export const decoString = x => quote(x.replace(/'/g, '\\\''))
