import { isTab, deNaTab, endsBracs, afterNaTab } from '@spare/util';
import { RN, TB } from '@spare/enum-chars';

const indexNonTab = tx => {
  let i = 0;

  for (let {
    length
  } = tx; i < length; i++) if (!isTab(tx.charAt(i))) return i;

  return i;
};

const afterNonTab = tx => tx.substring(deNaTab(tx));

function narrow(tx, lb, rb) {
  const [li, ri] = [tx.indexOf(lb), tx.lastIndexOf(rb)];
  return li > 0 && ri > 0 ? tx.slice(li, ri + rb.length) : tx;
}

function narrowExclude(tx, lb, rb) {
  const [li, ri] = [tx.indexOf(lb), tx.lastIndexOf(rb)];
  return li && ri ? tx.slice(li + lb.length, ri) : tx;
}

const trim = Function.prototype.call.bind(String.prototype.trim);

const wL = (tx = '') => {
  console.log(tx);
};

const tag = (label, item) => {
  const i = deNaTab(label);
  let [key, text] = [endsBracs(label) ? label : `${label.substring(0, i)}[${label.substring(i)}]`, `${item}`];

  if (text.includes('\n')) {
    const t = ' '.repeat(i);
    text = (text.endsWith('}') || text.endsWith(']')) && !text.endsWith(']]') ? afterNaTab(text.split(RN).map(x => t + x).join(RN)) : ['', ...text.split(RN).map(x => t + TB + x), t].join(RN);
  }

  return `${key} (${text})`;
};

export { afterNonTab, indexNonTab, narrow, narrowExclude, tag, wL };
