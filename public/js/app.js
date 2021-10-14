const btn = document.getElementById('button')
const messageOne = document.querySelector('#message-1')

const getMovie = require('../../src/utils/movies/getMovie')

btn.addEventListener('click', function(e) {
    e.preventDefault()

    const genero = $("#genero").val()
    const movie = getMovie(genero)

    messageOne.textContent = movie
})