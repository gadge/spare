import { isNumeric } from '@spare/util'

export class ClicheFin {
  constructor (region) {
    const { locale, options } = ClicheFin.currencyConfig(region)
    this.fm = new Intl.NumberFormat(locale, options)
  }

  form (any) {
    return isNumeric(any) ? this.fm.format(any) : String(any)
  }

  format (num) {
    return this.fm.format(num)
  }

  static get localeToCurrency () {
    return new Map([
      ['en-US', 'USD'],
      ['en-GB', 'GBP'],
      ['de-DE', 'EUR'],
      ['es-ES', 'EUR'],
      ['en-IN', 'INR'],
      ['zh-CN', 'CNY'],
      ['ja-JP', 'JPY'],
      ['ru-RU', 'RUB']
    ])
  }

  static currencyConfig (locale) {
    // currencyDisplay: "symbol"}};//'symbol','code','name'
    return {
      locale: locale,
      options: {
        style: 'currency',
        currency: ClicheFin.localeToCurrency.get(locale),
        currencyDisplay: 'symbol'
      }
    }
  }
}
