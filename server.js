const express = require('express')

const app = express()

const PORT = 5000

app.get('/', (req, res) => {
    res.send(`<h1>99 players in the battle royale </h1> <a href='/98'>Take one out, emote on them downed</a>`)
})

app.get('/:numberOfPlayers', function(req, res) {
    if (req.params.numberOfPlayers == 0)
        res.send(`<h1>Victory Royale!</h1> <a href='/'>Ready up.</a>`)
    else res.send(`<h1> ${req.params.numberOfPlayers} players in the battle royale </h1> <a href='/${req.params.numberOfPlayers - 1}'>Take one out, emote on them downed</a>`)
    })
    

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})