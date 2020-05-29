import { says }            from '@spare/logger'
import { makeReplaceable } from '../../src/makeReplaceable'

const rawDict = [
  [/e/g, 'a'],
  [/l/gi, 'r']
]

const dictionary = rawDict |> makeReplaceable

const HELLO = 'hello'
const LOS_ANGELES = 'Los Angeles'

/**
 *  // * @type {Function|function(string,[*,*][]):string}
 * @function
 */
const bulkReplace = Function.prototype.call.bind(String.prototype.replace)

'hello'.replace(dictionary, x => x.trim()) |> says[HELLO]

bulkReplace('hello', dictionary) |> says[HELLO]

String.prototype.replace.call(LOS_ANGELES, dictionary) |> says[LOS_ANGELES]
