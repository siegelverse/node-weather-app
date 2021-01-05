const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Marcus Siegel'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Marcus Siegel'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Marcus Siegel',
        email: 'msiegel37@gmail.com'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: '75 degrees and sunny',
        location: 'Austin, Texas'
    })
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})