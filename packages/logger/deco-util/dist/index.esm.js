import { FRESH, OCEAN, JUNGLE } from '@palett/presets';

const presetEntriesOptions = o => {
  o.preset = o.preset || FRESH;
  o.preset = o.preset || OCEAN;
  o.dash = o.dash || ' > ';
  o.delimiter = o.delimiter || '\n';
  return o;
};

const presetVectorOptions = o => {
  o.indexed = o.indexed || true;
  o.preset = o.preset || FRESH;
  o.stringPreset = o.stringPreset || JUNGLE;
  o.dash = o.dash || ') ';
  o.delimiter = o.delimiter || ',\n';
  return o;
};

export { presetEntriesOptions, presetVectorOptions };
