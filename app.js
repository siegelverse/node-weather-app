const request = require('request')
const geocode = require('./geocode')
const forecast = require('./forecast')

geocode('Austin', (error, data) => {
    if (error) {
        return console.log(error)
    }
    forecast(data.lat, data.long, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
    })
})

