const request = require('request')
const geocode = require('./geocode')
const forecast = require('./forecast')

geocode('Austin', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(44.1545, -75.7088, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})