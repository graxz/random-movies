const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')
const getMovie = require('../src/utils/movies/getMovie')

//Definindo pastas para a config do express
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/parcials')

//Configurando handlebars e a localizacao de views
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Configurando o diretorio para estatico (na url fica no final com .html, se carrega o arquivo nao dinamico)
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'RandomFlix',
        name: 'Isaddora Freitas'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Isaddora Freitas'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'Need help ?',
        name: 'Isaddora Freitas'
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is up on http://localhost:${PORT}`)
})