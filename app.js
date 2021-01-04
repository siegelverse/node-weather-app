const request = require('request')
const geocode = require('./geocode')

const weatherURL = 'http://api.weatherstack.com/current?access_key=a4788cc85c0a8114e826bb5016ef9604&query=37.8267,-122.4233'


// request({ url:weatherURL, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect to weather service")
//     } else if (response.body.error) {
//         console.log("Unable to find location")
//     } else {
//         const current = response.body.current
//         console.log(`${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees. It feels like ${current.feelslike} degrees.`)
//     }
// })


geocode('Austin', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})