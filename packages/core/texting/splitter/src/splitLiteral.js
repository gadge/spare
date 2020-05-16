import { LITERAL } from '@spare/regex-phrasing'
import { ripper }  from '@spare/ripper'

/** @type {Function|function(string):string[]} */
export const splitLiteral = ripper.bind(LITERAL)