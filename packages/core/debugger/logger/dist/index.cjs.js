'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Sayer = require('@palett/says');
var Deco = require('@spare/deco');
var DecoCrostabEnv = require('@spare/deco-crostab');
var DecoEntriesEnv = require('@spare/deco-entries');
var DecoMatrixEnv = require('@spare/deco-matrix');
var DecoObjectEnv = require('@spare/deco-object');
var DecoSamplesEnv = require('@spare/deco-samples');
var DecoStringEnv = require('@spare/deco-string');
var DecoTableEnv = require('@spare/deco-table');
var DecoVectorEnv = require('@spare/deco-vector');
var XrEnv = require('@spare/xr');
var enumChars = require('@spare/enum-chars');

const logger = (x, ...p) => void console.log(x + '', ...p);
const logNeL = (x, ...p) => void console.log(x + '', ...p, enumChars.LF);

/** @type {Function} */

const Xr = XrEnv.Xr;
/** @type {Function} */

const xr = XrEnv.xr;
/** @class */

const Says = Sayer.Says;
/** @type {Function} */

const says = Sayer.says;
/** @type {Function} */

const deco = Deco.deco;
/** @type {Function} */

const deca = Deco.deca;
/** @type {Function} */

const delogger = Deco.delogger;
/** @type {Function} */

const delogNeL = Deco.delogNeL;
/** @type {Function} */

const decoString = DecoStringEnv.deco;
/** @type {Function} */

const decoVector = DecoVectorEnv.deco;
/** @type {Function} */

const decoEntries = DecoEntriesEnv.deco;
/** @type {Function} */

const decoObject = DecoObjectEnv.deco;
/** @type {Function} */

const decoMatrix = DecoMatrixEnv.deco;
/** @type {Function} */

const decoSamples = DecoSamplesEnv.deco;
/** @type {Function} */

const decoTable = DecoTableEnv.deco;
/** @type {Function} */

const decoCrostab = DecoCrostabEnv.deco;
/** @type {Function} */

const DecoString = DecoStringEnv.Deco;
/** @type {Function} */

const DecoVector = DecoVectorEnv.Deco;
/** @type {Function} */

const DecoEntries = DecoEntriesEnv.Deco;
/** @type {Function} */

const DecoObject = DecoObjectEnv.Deco;
/** @type {Function} */

const DecoMatrix = DecoMatrixEnv.Deco;
/** @type {Function} */

const DecoSamples = DecoSamplesEnv.Deco;
/** @type {Function} */

const DecoTable = DecoTableEnv.Deco;
/** @type {Function} */

const DecoCrostab = DecoCrostabEnv.Deco;

exports.DecoCrostab = DecoCrostab;
exports.DecoEntries = DecoEntries;
exports.DecoMatrix = DecoMatrix;
exports.DecoObject = DecoObject;
exports.DecoSamples = DecoSamples;
exports.DecoString = DecoString;
exports.DecoTable = DecoTable;
exports.DecoVector = DecoVector;
exports.Says = Says;
exports.Xr = Xr;
exports.deca = deca;
exports.deco = deco;
exports.decoCrostab = decoCrostab;
exports.decoEntries = decoEntries;
exports.decoMatrix = decoMatrix;
exports.decoObject = decoObject;
exports.decoSamples = decoSamples;
exports.decoString = decoString;
exports.decoTable = decoTable;
exports.decoVector = decoVector;
exports.delogNeL = delogNeL;
exports.delogger = delogger;
exports.logNeL = logNeL;
exports.logger = logger;
exports.says = says;
exports.xr = xr;
