import { CJK_LETTERS, CJK_PUNCS, FULL_CHARS } from './elements'

const ESC = '\u{1B}'
const CSI = '\u{9B}'
const BEL = '\u{7}'

const ANSI_ALPHA = /(?:(?:[a-zA-Z\d]*(?:;[-a-zA-Z\d\/#&.:=?%@~_]*)*)?)/
const ANSI_BETA = /(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-ntqry=><~])/

export const ANSI = new RegExp(`[][[\\]()#;?]*(?:${ANSI_ALPHA.source}|${ANSI_BETA.source})`)

export const ASTRAL = /[\uD800-\uDBFF][\uDC00-\uDFFF]/ // 1024 * 1024

export const HAN = new RegExp(`[${CJK_PUNCS}${CJK_LETTERS}${FULL_CHARS}]`)

// HAN ideographs
//
// Block                                   Range       Comment
// CJK Unified Ideographs                  4E00-9FFF   Common
// CJK Unified Ideographs Extension A      3400-4DBF   Rare
// CJK Unified Ideographs Extension B      20000-2A6DF Rare, historic
// CJK Unified Ideographs Extension C      2A700–2B73F Rare, historic
// CJK Unified Ideographs Extension D      2B740–2B81F Uncommon, some in current use
// CJK Unified Ideographs Extension E      2B820–2CEAF Rare, historic
// CJK Compatibility Ideographs            F900-FAFF   Duplicates, unifiable variants, corporate characters
// CJK Compatibility Ideographs Supplement 2F800-2FA1F Unifiable variants