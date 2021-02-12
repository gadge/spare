const sortKeysByLength = dict => dict.sort(([a], [b]) => String(b).length - String(a).length);

const makeReplaceable = function (dict) {
  if (this !== null && this !== void 0 && this.sort) sortKeysByLength(dict);
  Object.defineProperty(dict, Symbol.replace, {
    value(word, after) {
      for (let [curr, proj] of this) word = word.replace(curr, proj);

      return after ? after(word) : word;
    },

    configurable: true,
    enumerable: false
  });
  return dict;
};
const MakeReplaceable = ({
  sort = true
} = {}) => makeReplaceable.bind({
  sort
});

const translate = (word, dict) => {
  for (let [curr, proj] of dict) word = word.replace(curr, proj);

  return word.trim();
};

class Translator {
  constructor(dictionary) {
    var _dictionary;

    this.dict = (_dictionary = dictionary, makeReplaceable(_dictionary));
  }

  static build(dict, {
    sort = true
  } = {}) {
    var _dict;

    if (sort) _dict = dict, sortKeysByLength(_dict);
    return new Translator(dict);
  }

  parse(word, after) {
    return word.replace(this.dict, after);
  }

  reboot(dict) {
    var _dict2;

    return dict ? (this.dict = (_dict2 = dict, makeReplaceable(_dict2)), this) : this;
  }

}

export { MakeReplaceable, Translator, makeReplaceable, translate };
