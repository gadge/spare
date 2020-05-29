import { LITERAL } from '@spare/regex-phrasing'
import { ripper }  from '@spare/ripper'

/**
 * @type {Function|function(string):string[]}
 * @function
 */
export const splitLiteral = ripper.bind(LITERAL)
