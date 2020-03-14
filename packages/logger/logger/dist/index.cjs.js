'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Deco = require('@spare/deco');
var XrEnv = require('@spare/xr');
var Sayer = require('@palett/says');
var DecoVectorEnv = require('@spare/deco-vector');
var DecoEntriesEnv = require('@spare/deco-entries');
var DecoMatrixEnv = require('@spare/deco-matrix');
var DecoSamplesEnv = require('@spare/deco-samples');
var DecoTableEnv = require('@spare/deco-table');
var DecoCrostabEnv = require('@spare/deco-crostab');

const logger = (x, ...p) => void console.log(x + '', ...p);
const logNeL = (x, ...p) => void console.log(x + '', ...p, '\n');

/** @function */

const Xr = XrEnv.Xr;
/** @function */

const xr = XrEnv.xr;
/** @class */

const Says = Sayer.Says;
/** @function */

const says = Sayer.says;
/** @function */

const deco = Deco.deco;
/** @function */

const deca = Deco.deca;
/** @function */

const delogger = Deco.delogger;
/** @function */

const delogNeL = Deco.delogNeL;
/** @function */

const decoVector = DecoVectorEnv.deco;
/** @function */

const decoEntries = DecoEntriesEnv.deco;
/** @function */

const decoMatrix = DecoMatrixEnv.deco;
/** @function */

const decoSamples = DecoSamplesEnv.deco;
/** @function */

const decoTable = DecoTableEnv.deco;
/** @function */

const decoCrostab = DecoCrostabEnv.deco;
/** @function */

const DecoVector = DecoVectorEnv.Deco;
/** @function */

const DecoEntries = DecoEntriesEnv.Deco;
/** @function */

const DecoMatrix = DecoMatrixEnv.Deco;
/** @function */

const DecoSamples = DecoSamplesEnv.Deco;
/** @function */

const DecoTable = DecoTableEnv.Deco;
/** @function */

const DecoCrostab = DecoCrostabEnv.Deco;

exports.DecoCrostab = DecoCrostab;
exports.DecoEntries = DecoEntries;
exports.DecoMatrix = DecoMatrix;
exports.DecoSamples = DecoSamples;
exports.DecoTable = DecoTable;
exports.DecoVector = DecoVector;
exports.Says = Says;
exports.Xr = Xr;
exports.deca = deca;
exports.deco = deco;
exports.decoCrostab = decoCrostab;
exports.decoEntries = decoEntries;
exports.decoMatrix = decoMatrix;
exports.decoSamples = decoSamples;
exports.decoTable = decoTable;
exports.decoVector = decoVector;
exports.delogNeL = delogNeL;
exports.delogger = delogger;
exports.logNeL = logNeL;
exports.logger = logger;
exports.says = says;
exports.xr = xr;
