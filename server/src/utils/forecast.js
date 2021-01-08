const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=a4788cc85c0a8114e826bb5016ef9604&query=${lat},${long}&units=f`
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            const current = body.current
            callback(undefined, `Local time is ${current.observation_time}. ${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees. It feels like ${current.feelslike} degrees.`)
        }
    })
}

module.exports = forecast