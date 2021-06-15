'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
var Sayer = require('@spare/says');
var XrEnv = require('@spare/xr');
var enumChars = require('@spare/enum-chars');

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () {
						return e[k];
					}
				});
			}
		});
	}
	n['default'] = e;
	return Object.freeze(n);
}

var DecoGeneric__namespace = /*#__PURE__*/_interopNamespace(DecoGeneric);
var DecoCrostabEnv__namespace = /*#__PURE__*/_interopNamespace(DecoCrostabEnv);
var DecoEntriesEnv__namespace = /*#__PURE__*/_interopNamespace(DecoEntriesEnv);
var DecoFlatEnv__namespace = /*#__PURE__*/_interopNamespace(DecoFlatEnv);
var DecoFuncEnv__namespace = /*#__PURE__*/_interopNamespace(DecoFuncEnv);
var DecoMatrixEnv__namespace = /*#__PURE__*/_interopNamespace(DecoMatrixEnv);
var DecoObjectEnv__namespace = /*#__PURE__*/_interopNamespace(DecoObjectEnv);
var DecoPaleEnv__namespace = /*#__PURE__*/_interopNamespace(DecoPaleEnv);
var DecoSamplesEnv__namespace = /*#__PURE__*/_interopNamespace(DecoSamplesEnv);
var DecoStringEnv__namespace = /*#__PURE__*/_interopNamespace(DecoStringEnv);
var DecoTableEnv__namespace = /*#__PURE__*/_interopNamespace(DecoTableEnv);
var DecoVectorEnv__namespace = /*#__PURE__*/_interopNamespace(DecoVectorEnv);
var Sayer__namespace = /*#__PURE__*/_interopNamespace(Sayer);
var XrEnv__namespace = /*#__PURE__*/_interopNamespace(XrEnv);

const logger = (x, ...p) => void console.log(x + '', ...p);
const logNeL = (x, ...p) => void console.log(x + '', ...p, enumChars.LF);

const {
  deco,
  Deco,
  delogger,
  delogNeL
} = DecoGeneric__namespace;
const {
  deco: decoString,
  Deco: DecoString
} = DecoStringEnv__namespace;
const {
  deco: decoVector,
  Deco: DecoVector
} = DecoVectorEnv__namespace;
const {
  deco: decoEntries,
  Deco: DecoEntries
} = DecoEntriesEnv__namespace;
const {
  deco: decoObject,
  Deco: DecoObject
} = DecoObjectEnv__namespace;
const {
  deco: decoMatrix,
  Deco: DecoMatrix
} = DecoMatrixEnv__namespace;
const {
  deco: decoSamples,
  Deco: DecoSamples
} = DecoSamplesEnv__namespace;
const {
  deco: decoTable,
  Deco: DecoTable
} = DecoTableEnv__namespace;
const {
  deco: decoCrostab,
  Deco: DecoCrostab
} = DecoCrostabEnv__namespace;
const {
  decoFunc,
  DecoFunc
} = DecoFuncEnv__namespace;
const {
  decoPale,
  DecoPale
} = DecoPaleEnv__namespace;
const {
  decoFlat,
  DecoFlat
} = DecoFlatEnv__namespace;
const {
  Says,
  says,
  ros
} = Sayer__namespace;
const {
  Xr,
  xr
} = XrEnv__namespace;

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
