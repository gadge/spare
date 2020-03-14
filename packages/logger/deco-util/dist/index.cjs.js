'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var presets = require('@palett/presets');

const presetEntriesOptions = o => {
  o.preset = o.preset || presets.FRESH;
  o.preset = o.preset || presets.OCEAN;
  o.dash = o.dash || ' > ';
  o.delimiter = o.delimiter || '\n';
  return o;
};

const presetVectorOptions = o => {
  o.indexed = o.indexed || true;
  o.preset = o.preset || presets.FRESH;
  o.stringPreset = o.stringPreset || presets.JUNGLE;
  o.dash = o.dash || ') ';
  o.delimiter = o.delimiter || ',\n';
  return o;
};

exports.presetEntriesOptions = presetEntriesOptions;
exports.presetVectorOptions = presetVectorOptions;
