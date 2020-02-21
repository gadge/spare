import { afterNaTab, deNaTab, endsBracs, RN, TB } from '@spare/util'

const wL = (tx = '') => {
  console.log(tx)
}

const tag = (label, item) => {
  const i = deNaTab(label)
  let [key, text] = [
    endsBracs(label)
      ? label
      : `${label.substring(0, i)}[${label.substring(i)}]`,
    `${item}`
  ]
  if (text.includes('\n')) {
    const t = ' '.repeat(i)
    text = (text.endsWith('}') || text.endsWith(']')) && !text.endsWith(']]')
      ? afterNaTab(text.split(RN).map(x => t + x).join(RN))
      : ['', ...text.split(RN).map(x => t + TB + x), t].join(RN)
  }
  return `${key} (${text})`
}

export {
  wL,
  tag
}
