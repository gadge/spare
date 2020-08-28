const ESC = '\u001B'
const CSI = '\u009B'
const BEL = '\u0007'
const PART_ALPHA = /(?:(?:[a-zA-Z\d]*(?:;[-a-zA-Z\d\/#&.:=?%@~_]*)*)?\u0007)/
const PART_BETA = /(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-ntqry=><~])/


export const ansi = RegExp(`[][[\\]()#;?]*(?:${ PART_ALPHA.source }|${ PART_BETA.source })`)

export const astral = /[\uD800-\uDBFF][\uDC00-\uDFFF]/

export const han = /[\u4e00-\u9fa5]|[\uff00-\uffff]/





