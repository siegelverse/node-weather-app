const request = require('request')
const moment = require('moment-timezone')

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=a4788cc85c0a8114e826bb5016ef9604&query=${lat},${long}&units=f`
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            const current = body.current
            const localTime = moment.tz(body.location.localtime, body.location.timezone_id).format('h:mma z')
            callback(undefined, `Local time is ${localTime}. ${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees. It feels like ${current.feelslike} degrees.`)
        }
    })
}

module.exports = forecast