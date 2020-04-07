import { fluoVector } from '@palett/fluo-vector';
import { zipper } from '@vect/vector-zipper';
import { JUNGLE, SUBTLE } from '@palett/presets';
import { camelToVector, snakeToVector } from '@spare/phrasing';
import { DA, SP } from '@spare/enum-chars';

const decoCamel = (phrase, {
  delim = '',
  preset = JUNGLE,
  stringPreset = SUBTLE
}) => {
  var _phrase;

  const words = (_phrase = phrase, camelToVector(_phrase));
  const dyes = fluoVector(words, {
    preset,
    stringPreset,
    colorant: true
  });
  return zipper(words, dyes, (word, dye) => {
    var _word;

    return _word = word, dye(_word);
  }).join(delim);
};
const decoSnake = (phrase, {
  delim = DA,
  preset = JUNGLE,
  stringPreset = SUBTLE
}) => {
  var _phrase2;

  const words = (_phrase2 = phrase, snakeToVector(_phrase2));
  const dyes = fluoVector(words, {
    preset,
    stringPreset,
    colorant: true
  });
  return zipper(words, dyes, (word, dye) => {
    var _word2;

    return _word2 = word, dye(_word2);
  }).join(delim);
};
const decoPhrase = (phrase, {
  delim = SP,
  preset = JUNGLE,
  stringPreset = SUBTLE
}) => {
  const words = phrase.split(delim);
  const dyes = fluoVector(words, {
    preset,
    stringPreset,
    colorant: true
  });
  return zipper(words, dyes, (word, dye) => {
    var _word3;

    return _word3 = word, dye(_word3);
  }).join(delim);
}; // export const deco

export { decoCamel, decoPhrase, decoSnake };
