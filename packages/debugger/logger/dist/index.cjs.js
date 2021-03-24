'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Sayer = require('@spare/says');
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

var Sayer__namespace = /*#__PURE__*/_interopNamespace(Sayer);
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
var XrEnv__namespace = /*#__PURE__*/_interopNamespace(XrEnv);

const logger = (x, ...p) => void console.log(x + '', ...p);
const logNeL = (x, ...p) => void console.log(x + '', ...p, enumChars.LF);

/** @type {Function} */

const Xr = XrEnv__namespace.Xr;
/** @type {Function} */

const xr = XrEnv__namespace.xr;
/** @class */

const Says = Sayer__namespace.Says;
/** @type {Function} */

const says = Sayer__namespace.says;
/** @type {Function} */

const ros = Sayer__namespace.ros;
/** @type {Function} */

const deco = DecoGeneric__namespace.deco;
/** @type {Function} */

const Deco = DecoGeneric__namespace.Deco;
/** @type {Function} */

const deca = DecoGeneric__namespace.Deco;
/** @type {Function} */

const delogger = DecoGeneric__namespace.delogger;
/** @type {Function} */

const delogNeL = DecoGeneric__namespace.delogNeL;
/** @type {Function} */

const decoString = DecoStringEnv__namespace.deco;
/** @type {Function} */

const decoVector = DecoVectorEnv__namespace.deco;
/** @type {Function} */

const decoEntries = DecoEntriesEnv__namespace.deco;
/** @type {Function} */

const decoObject = DecoObjectEnv__namespace.deco;
/** @type {Function} */

const decoMatrix = DecoMatrixEnv__namespace.deco;
/** @type {Function} */

const decoSamples = DecoSamplesEnv__namespace.deco;
/** @type {Function} */

const decoTable = DecoTableEnv__namespace.deco;
/** @type {Function} */

const decoCrostab = DecoCrostabEnv__namespace.deco;
/** @type {Function} */

const decoFunc = DecoFuncEnv__namespace.decoFunc;
/** @type {Function} */

const decoPale = DecoPaleEnv__namespace.decoPale;
/** @type {Function} */

const decoFlat = DecoFlatEnv__namespace.decoFlat;
/** @type {Function} */

const DecoString = DecoStringEnv__namespace.Deco;
/** @type {Function} */

const DecoVector = DecoVectorEnv__namespace.Deco;
/** @type {Function} */

const DecoEntries = DecoEntriesEnv__namespace.Deco;
/** @type {Function} */

const DecoObject = DecoObjectEnv__namespace.Deco;
/** @type {Function} */

const DecoMatrix = DecoMatrixEnv__namespace.Deco;
/** @type {Function} */

const DecoSamples = DecoSamplesEnv__namespace.Deco;
/** @type {Function} */

const DecoTable = DecoTableEnv__namespace.Deco;
/** @type {Function} */

const DecoCrostab = DecoCrostabEnv__namespace.Deco;
/** @type {Function} */

const DecoFunc = DecoFuncEnv__namespace.DecoFunc;
/** @type {Function} */

const DecoPale = DecoPaleEnv__namespace.DecoPale;
/** @type {Function} */

const DecoFlat = DecoFlatEnv__namespace.DecoFlat;

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
