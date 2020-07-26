'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumChars = require('@spare/enum-chars');

const foldToVector = function (text) {
  var _text;

  let {
    width: wd = 80,
    regex = /\s/,
    firstLineIndent: fli = 0
  } = this !== null && this !== void 0 ? this : {};
  const end = (_text = text) === null || _text === void 0 ? void 0 : _text.length,
        lines = [];
  if (!end) return lines;
  if (!wd) return lines.push(text), lines;
  if (fli) fli >= wd ? lines.push(enumChars.VO) : text = enumChars.SP.repeat(fli) + text;
  let i = 0,
      th = 0,
      line; // i: index, th: threshold

  while ((th = i + wd) < end) {
    while (i <= th) if (regex.test(text[--th])) {
      break;
    }

    line = i < th ? text.slice(i, i = th + 1) : text.slice(i, i += wd - 1) + enumChars.DA; // the case when lengths of the current word exceeds the 'width'

    lines.push(line);
  }

  if (i < text.length) lines.push(text.slice(i));
  if (fli) lines[0] = lines[0].slice(fli);
  return lines;
};
const fold = function (text) {
  var _this$delim, _text2;

  const context = this;
  const delim = (_this$delim = this === null || this === void 0 ? void 0 : this.delim) !== null && _this$delim !== void 0 ? _this$delim : enumChars.LF;
  const vec = (_text2 = text, foldToVector.bind(context)(_text2));
  return vec.join(delim);
};
const FoldToVector = ({
  width,
  regex,
  firstLineIndent
}) => {
  return foldToVector.bind({
    width,
    regex,
    firstLineIndent
  });
};
const Fold = ({
  width,
  delim,
  regex,
  firstLineIndent
}) => {
  return fold.bind({
    width,
    delim,
    regex,
    firstLineIndent
  });
};

exports.Fold = Fold;
exports.FoldToVector = FoldToVector;
exports.fold = fold;
exports.foldToVector = foldToVector;
