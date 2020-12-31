const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=a4788cc85c0a8114e826bb5016ef9604&query=37.8267,-122.4233'

request({ url:url, json: true }, (error, response) => {
    console.log(response.current)
})