'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const INIWORD = /[A-Za-z\d]+/;
const INILOW = /^[a-z]+/;
const CAMEL = /[A-Z]+|[0-9]+/g;
const WORD = /[A-Za-z\d]+/g;
const CAPWORD = /([A-Z][a-z]+|[A-Z]+|[\d]+[a-z]*)/g;
const DASH_CAPREST = /[\W_]+([A-Za-z\d])([A-Za-z\d]*)/g;
const CAPREST = /([A-Za-z\d])([A-Za-z\d]*)/g;

exports.CAMEL = CAMEL;
exports.CAPREST = CAPREST;
exports.CAPWORD = CAPWORD;
exports.DASH_CAPREST = DASH_CAPREST;
exports.INILOW = INILOW;
exports.INIWORD = INIWORD;
exports.WORD = WORD;
