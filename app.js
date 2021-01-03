const request = require('request')

const weatherURL = 'http://api.weatherstack.com/current?access_key=a4788cc85c0a8114e826bb5016ef9604&query=37.8267,-122.4233'

const mapURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2llZ2VsdmVyc2UiLCJhIjoiY2tqaGl0eWRpNGxzbTJzbnA1ODZkYnd0diJ9.C85VzBtsLrEfhfgplzTmDQ'

request({ url:weatherURL, json: true }, (error, response) => {
    if (error) {
        console.log("Unable to connect to weather service")
    } else if (response.body.error) {
        console.log("Unable to find location")
    } else {
        const current = response.body.current
        console.log(`${current.weather_descriptions[0]}. It is currently ${current.temperature} degrees. It feels like ${current.feelslike} degrees.`)
    }
})

request({ url:mapURL, json: true }, (error, response) => {
    if (error) {
        console.log("Unable to connect to mapbox")
    } else if (response.body.features.length === 0) {
        console.log("Try again with different search term")
    } else {
    const lat = response.body.features[0].center[1]
    const long = response.body.features[0].center[0]
    console.log(lat, long)
    }
})