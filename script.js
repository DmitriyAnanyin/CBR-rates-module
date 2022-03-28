import {
  RMGetAll,
  RMRoundTo,
  RMCostInRUB,
  RMSelectRates
} from './RatesModule.js'

let OlRates = document.getElementById('rates-body').innerHTML

const data = await RMGetAll()

const costsRatesInRUB = RMRoundTo(RMCostInRUB(data.rates), 2)

const ratesList = RMSelectRates(costsRatesInRUB, ['EUR', 'USD'])

for (let key in ratesList) {
  OlRates += `<li> ${key}: ${costsRatesInRUB[key]} </li>`
}

document.getElementById('rates-base').innerHTML += ` in ${data.date}`
document.getElementById('rates-body').innerHTML = OlRates
