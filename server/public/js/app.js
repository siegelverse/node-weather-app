console.log('client side js file loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message1')
const messageTwo = document.querySelector('#message2')
const weatherImg = document.querySelector('.weather-icon')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    const url = 'http://localhost:3000/weather?address='+location
    fetch(url).then(res => {
        res.json().then(data => {
            if (data.error) {
                messageOne.textContent = data.error
            } 

            const weatherDesc = data.forecastData.split('. ')[1]
            console.log(weatherDesc)

            if (weatherDesc === "Sunny" || weatherDesc === "Clear") {
                weatherImg.src = './img/iconfinder_sun_2995005.png'
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecastData
            } else if (weatherDesc === "Cloudy" || weatherDesc === "Partly cloudy") {
                weatherImg.src = './img/iconfinder_cloudy_2995001.png'
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecastData
            } else if (weatherDesc === "Snow" || weatherDesc === "Freeze" || weatherDesc === "Light snow") {
                weatherImg.src = './img/iconfinder_snow_2995006.png'
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecastData
            } else if (weatherDesc === "Rain" || weatherDesc === "Thunder" || weatherDesc === "Thunderstorms") {
                weatherImg.src = './img/iconfinder_flash-cloud_2995010.png'
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecastData
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecastData
            }
            
        })
    })
})