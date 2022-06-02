const axios = require('axios');

// gypOxrI2MlXELoKBJILO5GcmuDEE5c8f

const getExchangeRate = (fromCurrency,toCurrency) =>{
    axios.get('http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1').then((response)=>{
        const rate =  response.data.rates;
        const euro = 1 / rate[fromCurrency];
        const ExchangeRate = euro * rate/[toCurrency]
        console.log(ExchangeRate)
    })
}

getExchangeRate('USD','EUR')

