import { deNaTab, isTab } from '@spare/util'

const indexNonTab = tx => {
  let i = 0
  for (let { length } = tx; i < length; i++) if (!isTab(tx.charAt(i))) return i
  return i
}

const afterNonTab = tx => tx.substring(deNaTab(tx))

export {
  indexNonTab,
  afterNonTab
}
