'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const HALF_CHARS = '\u2000-\u206f';
const CJK_PUNCS = '\u3000-\u303f';
const CJK_CHARS = '\u4e00-\u9fbf';
const FULL_CHARS = '\uff00-\uffef';

const ANSI_ALPHA = /(?:(?:[a-zA-Z\d]*(?:;[-a-zA-Z\d\/#&.:=?%@~_]*)*)?)/;
const ANSI_BETA = /(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-ntqry=><~])/;
const ANSI = new RegExp(`[][[\\]()#;?]*(?:${ANSI_ALPHA.source}|${ANSI_BETA.source})`);
const ASTRAL = /[\uD800-\uDBFF][\uDC00-\uDFFF]/; // 1024 * 1024

const HAN = new RegExp(`[${CJK_PUNCS}${CJK_CHARS}${FULL_CHARS}]`); // HAN ideographs
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

const ANSI_G = new RegExp(ANSI, 'g');
const ASTRAL_G = new RegExp(ASTRAL, 'g');
const HAN_G = new RegExp(HAN, 'g');

exports.ANSI = ANSI;
exports.ANSI_G = ANSI_G;
exports.ASTRAL = ASTRAL;
exports.ASTRAL_G = ASTRAL_G;
exports.CJK_CHARS = CJK_CHARS;
exports.CJK_PUNCS = CJK_PUNCS;
exports.FULL_CHARS = FULL_CHARS;
exports.HALF_CHARS = HALF_CHARS;
exports.HAN = HAN;
exports.HAN_G = HAN_G;
