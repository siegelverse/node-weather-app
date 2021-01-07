console.log('client side js file loaded')
const url = 'http://localhost:3000/weather?address=austin'
fetch(url).then(res => {
    res.json().then(data => {
        if (data.error) {
            console.log(data.error)
        }
        console.log(data.location)
        console.log(data.forecastData)
    })
})
