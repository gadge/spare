'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumChars = require('@spare/enum-chars');

const foldToVector = function (text) {
  let {
    width: d = 80,
    regex = /\s/
  } = this !== null && this !== void 0 ? this : {};
  const threshold = text === null || text === void 0 ? void 0 : text.length,
        lines = [];
  let l = 0,
      r = 0,
      line;

  while ((r = l + d) < threshold) {
    while (l <= r) if (regex.test(text[--r])) {
      break;
    }

    line = l < r ? text.slice(l, l = r + 1) : text.slice(l, l += d - 1) + enumChars.DA;
    lines.push(line);
  } // line |> parenth |> decoString |> says['line'].br(line.length)


  if (l < text.length) lines.push(text.slice(l));
  return lines;
};
const fold = function (text) {
  var _this$delim, _text;

  const context = this;
  const delim = (_this$delim = this === null || this === void 0 ? void 0 : this.delim) !== null && _this$delim !== void 0 ? _this$delim : enumChars.LF;
  const vec = (_text = text, foldToVector.bind(context)(_text));
  return vec.join(delim);
};
const FoldToVector = ({
  width,
  regex
}) => {
  return foldToVector.bind({
    width,
    regex
  });
};
const Fold = ({
  width,
  delim,
  regex
}) => {
  return fold.bind({
    width,
    delim,
    regex
  });
};

exports.Fold = Fold;
exports.FoldToVector = FoldToVector;
exports.fold = fold;
exports.foldToVector = foldToVector;
