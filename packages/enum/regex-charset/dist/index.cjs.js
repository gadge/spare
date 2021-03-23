'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const HALF_CHARS = '\u0020-\u007F'; // half letters + half puncs

const GEN_PUNCS = '\u2000-\u206f';
const CJK_PUNCS = '\u3000-\u303f';
const CJK_LETTERS = '\u4e00-\u9fbf';
const FULL_CHARS = '\uff00-\uffef'; // full letters + full puncs

const HALF_NUM = '0-9';
const HALF_UPPER = 'A-Z';
const HALF_LOWER = 'a-z';
const FULL_NUM = '０-９'; // 0xff10 - 0xff19

const FULL_UPPER = 'Ａ-Ｚ'; // 0xff21 - 0xff3a

const FULL_LOWER = 'ａ-ｚ'; // 0xff41 - 0xff5a

const ANSI_ALPHA = /(?:(?:[a-zA-Z\d]*(?:;[-a-zA-Z\d\/#&.:=?%@~_]*)*)?)/;
const ANSI_BETA = /(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-ntqry=><~])/;
const ANSI = new RegExp(`[][[\\]()#;?]*(?:${ANSI_ALPHA.source}|${ANSI_BETA.source})`);
const ASTRAL = /[\uD800-\uDBFF][\uDC00-\uDFFF]/; // 1024 * 1024

const HAN = new RegExp(`[${CJK_PUNCS}${CJK_LETTERS}${FULL_CHARS}]`); // HAN ideographs
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
exports.CJK_LETTERS = CJK_LETTERS;
exports.CJK_PUNCS = CJK_PUNCS;
exports.FULL_CHARS = FULL_CHARS;
exports.FULL_LOWER = FULL_LOWER;
exports.FULL_NUM = FULL_NUM;
exports.FULL_UPPER = FULL_UPPER;
exports.GEN_PUNCS = GEN_PUNCS;
exports.HALF_CHARS = HALF_CHARS;
exports.HALF_LOWER = HALF_LOWER;
exports.HALF_NUM = HALF_NUM;
exports.HALF_UPPER = HALF_UPPER;
exports.HAN = HAN;
exports.HAN_G = HAN_G;
