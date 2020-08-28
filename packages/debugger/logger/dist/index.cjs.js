'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Sayer = require('@palett/says');
var DecoGeneric = require('@spare/deco');
var DecoCrostabEnv = require('@spare/deco-crostab');
var DecoEntriesEnv = require('@spare/deco-entries');
var DecoFlatEnv = require('@spare/deco-flat');
var DecoFuncEnv = require('@spare/deco-func');
var DecoMatrixEnv = require('@spare/deco-matrix');
var DecoObjectEnv = require('@spare/deco-object');
var DecoPaleEnv = require('@spare/deco-pale');
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

const ros = Sayer.ros;
/** @type {Function} */

const deco = DecoGeneric.deco;
/** @type {Function} */

const Deco = DecoGeneric.Deco;
/** @type {Function} */

const deca = DecoGeneric.Deco;
/** @type {Function} */

const delogger = DecoGeneric.delogger;
/** @type {Function} */

const delogNeL = DecoGeneric.delogNeL;
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

const decoFunc = DecoFuncEnv.decoFunc;
/** @type {Function} */

const decoPale = DecoPaleEnv.decoPale;
/** @type {Function} */

const decoFlat = DecoFlatEnv.decoFlat;
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
/** @type {Function} */

const DecoFunc = DecoFuncEnv.DecoFunc;
/** @type {Function} */

const DecoPale = DecoPaleEnv.DecoPale;
/** @type {Function} */

const DecoFlat = DecoFlatEnv.DecoFlat;

exports.Deco = Deco;
exports.DecoCrostab = DecoCrostab;
exports.DecoEntries = DecoEntries;
exports.DecoFlat = DecoFlat;
exports.DecoFunc = DecoFunc;
exports.DecoMatrix = DecoMatrix;
exports.DecoObject = DecoObject;
exports.DecoPale = DecoPale;
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
exports.decoFlat = decoFlat;
exports.decoFunc = decoFunc;
exports.decoMatrix = decoMatrix;
exports.decoObject = decoObject;
exports.decoPale = decoPale;
exports.decoSamples = decoSamples;
exports.decoString = decoString;
exports.decoTable = decoTable;
exports.decoVector = decoVector;
exports.delogNeL = delogNeL;
exports.delogger = delogger;
exports.logNeL = logNeL;
exports.logger = logger;
exports.ros = ros;
exports.says = says;
exports.xr = xr;
