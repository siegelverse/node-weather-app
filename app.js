const request = require('request')
const geocode = require('./geocode')
const forecast = require('./forecast')


const address = process.argv[2]

if (!address) {
    console.log('You must enter an address!')
} else {
    geocode(address, (error, {lat, long, location} = {}) => {
        if (error) {
            return console.log(error)
        }
        forecast(lat, long, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}

