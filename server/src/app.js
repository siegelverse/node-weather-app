const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

// app.get('/help', (req, res) => {
//     res.send([
//     {
//         name: 'Marcus', 
//         age: 27
//     },
//     {
//         name: 'Snax',
//         age: 6
//     }
// ])
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>')
// })


app.get('/weather', (req, res) => {
    res.send({
        forecast: '75 degrees and sunny',
        location: 'Austin, Texas'
    })
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})