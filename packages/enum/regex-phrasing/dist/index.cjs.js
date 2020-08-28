'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const INIWORD = /[A-Za-z\d]+/;
const INILOW = /^[a-z]+/;
const CAMEL = /[A-Z]+|[0-9]+/g;
const LITERAL = /[a-z]+|[A-Z][a-z]+|(?<=[a-z]|\W|_)[A-Z]+(?=[A-Z][a-z]|\W|_|$)|[\d]+[a-z]*/g;
const WORD = /[A-Za-z\d]+/g; // export const CAPWORD = /([A-Z][a-z]+|[A-Z]+|[\d]+[a-z]*)/g

const CAPWORD = /[A-Z][a-z]+|[A-Z]+(?=[A-Z][a-z]|\d|\W|_|$)|[\d]+[a-z]*/g;
const DASH_CAPREST = /[\W_]+([A-Za-z\d])([A-Za-z\d]*)/g;
const CAPREST = /([A-Za-z\d])([A-Za-z\d]*)/g;
/**
 * @example foo.bar.zen
 * @example foo_bar_zen
 * @example fooBarZen
 * @example foo/bar/zen
 * @example foo.barZen10th-2022.pdf
 * @example https://www.foo-bar.com/main?format=json&slice=20
 */

exports.CAMEL = CAMEL;
exports.CAPREST = CAPREST;
exports.CAPWORD = CAPWORD;
exports.DASH_CAPREST = DASH_CAPREST;
exports.INILOW = INILOW;
exports.INIWORD = INIWORD;
exports.LITERAL = LITERAL;
exports.WORD = WORD;
