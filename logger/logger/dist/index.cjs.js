'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Deco = require('@spare/deco');
var XrEnv = require('@spare/xr');
var Sayer = require('@palett/says');
var DecoVectorEnv = require('@spare/deco-vector');
var DecoEntriesEnv = require('@spare/deco-entries');
var DecoMatrixEnv = require('@spare/deco-matrix');
var DecoTableEnv = require('@spare/deco-table');
var DecoCrostabEnv = require('@spare/deco-crostab');

const logger = (x, ...p) => void console.log(x + '', ...p);
const logNeL = (x, ...p) => void console.log(x + '', ...p, '\n');

const {
  Xr,
  xr
} = XrEnv;
const {
  Says,
  says
} = Sayer;
const {
  deco,
  deca,
  delogger,
  delogNeL
} = Deco;
const decoVector = DecoVectorEnv.deco;
const decoEntries = DecoEntriesEnv.deco;
const decoMatrix = DecoMatrixEnv.deco;
const decoTable = DecoTableEnv.deco;
const decoCrostab = DecoCrostabEnv.deco;
const DecoVector = DecoVectorEnv.Deco;
const DecoEntries = DecoEntriesEnv.Deco;
const DecoMatrix = DecoMatrixEnv.Deco;
const DecoTable = DecoTableEnv.Deco;
const DecoCrostab = DecoCrostabEnv.Deco;

exports.DecoCrostab = DecoCrostab;
exports.DecoEntries = DecoEntries;
exports.DecoMatrix = DecoMatrix;
exports.DecoTable = DecoTable;
exports.DecoVector = DecoVector;
exports.Says = Says;
exports.Xr = Xr;
exports.deca = deca;
exports.deco = deco;
exports.decoCrostab = decoCrostab;
exports.decoEntries = decoEntries;
exports.decoMatrix = decoMatrix;
exports.decoTable = decoTable;
exports.decoVector = decoVector;
exports.delogNeL = delogNeL;
exports.delogger = delogger;
exports.logNeL = logNeL;
exports.logger = logger;
exports.says = says;
exports.xr = xr;
