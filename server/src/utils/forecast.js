const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=a4788cc85c0a8114e826bb5016ef9604&query=${lat},${long}`
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            const current = body.current
            callback(undefined, `${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees. It feels like ${current.feelslike} degrees.`)
        }
    })
}

module.exports = forecast