const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Set up static directory to serve
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

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Help Article Not Found',
        name: 'Marcus Siegel'
    })
})

app.get('/about/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'About Article Not Found',
        name: 'Marcus Siegel'
    })
})

app.get('/weather/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Weather Article Not Found',
        name: 'Marcus Siegel'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page Not Found',
        name: 'Marcus Siegel'
    })
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})