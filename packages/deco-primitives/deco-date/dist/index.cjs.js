'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var timestampPretty = require('@valjoux/timestamp-pretty');

const decoDate = timestampPretty.date;
const decoTime = timestampPretty.roughTime;
const decoDateTime = timestampPretty.dateTime;

exports.decoDate = decoDate;
exports.decoDateTime = decoDateTime;
exports.decoTime = decoTime;
