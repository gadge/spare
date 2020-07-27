'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumChars = require('@spare/enum-chars');

const SPACE = /\s+/g;
const LINEFEED = /\r?\n/;
const foldToVector = function (text) {
  const {
    width: wd = 80,
    regex = SPACE,
    firstLineIndent
  } = this !== null && this !== void 0 ? this : {};
  const lines = [];
  let ms,
      ph,
      pr = 0,
      cu = 0,
      la = 0,
      nx = 0,
      th = pr + wd;
  if (firstLineIndent) text = enumChars.SP.repeat(firstLineIndent) + text;

  while ((ms = regex.exec(text)) && ([ph] = ms)) {
    // VO |> says['progress'].p(pr).p(DA).br(cu + ':' + la).p(DA).br(nx).p(codes(ph)).br(/\r?\n/.test(ph)).p(DA).p(th)
    nx = ms.index;
    if (nx > th) lines.push(text.slice(pr, cu)), pr = la, th = pr + wd;
    if (LINEFEED.test(ph)) lines.push(text.slice(pr, nx)), pr = regex.lastIndex, th = pr + wd;
    cu = nx, la = regex.lastIndex;
  }

  if (text.length > th) lines.push(text.slice(pr, cu)), pr = la;
  if (pr < text.length) lines.push(text.slice(pr));
  if (firstLineIndent) lines[0] = lines[0].slice(firstLineIndent);
  return lines;
};
const fold = function (text) {
  var _this$delim, _text;

  const context = this;
  const delim = (_this$delim = this === null || this === void 0 ? void 0 : this.delim) !== null && _this$delim !== void 0 ? _this$delim : enumChars.LF;
  const lines = (_text = text, foldToVector.bind(context)(_text));
  return lines.join(delim);
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
