const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

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
        title: "Hey, Weather!",
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
    if (!req.query.address) {
        return res.send({
            error: "You must enter an address!"
        })
    } else {
        geocode(req.query.address, (error, { lat, long, location } = {}) => {
            if (error) {
                return res.send({ error })
            }
            forecast(lat, long, (error, forecastData) => {
                if (error) {
                    return res.send({ error })
                }
                res.send({
                    forecastData,
                    location
                })
            })
        })

    }
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