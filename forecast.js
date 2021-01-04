const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=a4788cc85c0a8114e826bb5016ef9604&query=${lat},${long}`
    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service')
        } else if (response.body.error) {
            callback('Unable to find location')
        } else {
            const current = response.body.current
            callback(undefined, `${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees. It feels like ${current.feelslike} degrees.`)
        }
    })
}

module.exports = forecast