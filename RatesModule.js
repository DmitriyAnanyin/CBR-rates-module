const RatesModule = {
  getAll: async () => {
    return await (
      await fetch(`https://www.cbr-xml-daily.ru/latest.js?base=EUR`)
    ).json()
  },

  roundTo: (rates, roundTo) => {
    const obj = {}
    for (let key in rates) {
      const value = rates[key].toFixed(roundTo)
      obj[key] = value
    }
    return obj
  },

  costInRUB: (rates) => {
    const obj = {}
    for (let key in rates) {
      const value = 1 / rates[key]
      obj[key] = value
    }
    return obj
  },

  selectRates(rates, selectedArr) {
    const obj = {}
    selectedArr.map((rate) => {
      rate = rate.toUpperCase()
      rates.hasOwnProperty(rate) ? (obj[rate] = rates[rate]) : false
    })
    return obj
  }
}

export const RMGetAll = RatesModule.getAll
export const RMRoundTo = RatesModule.roundTo
export const RMCostInRUB = RatesModule.costInRUB
export const RMSelectRates = RatesModule.selectRates
