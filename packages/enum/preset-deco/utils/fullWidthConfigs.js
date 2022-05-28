import { isNumeric as isNumericFull, parseNum } from '@texting/charset-fullwidth'
import { isNumeric as isNumericHalf }           from '@texting/charset-halfwidth'
import { stringValue }                          from '@texting/string-value'
import { isLiteralAny }                         from '@typen/literal'

export const isNumeric = x => isNumericFull(x) || isNumericHalf(x)

export const NUM_BOUND_CONF_FULL = { by: isNumeric, to: parseNum }
export const STR_BOUND_CONF_FULL = { by: isLiteralAny, to: stringValue }