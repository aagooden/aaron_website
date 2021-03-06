const express = require('express')
const app = express()

require('dotenv').config()
require('./routes/routes.js')(app)
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'dev') { console.log("It is equal to dev!!") }
if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like main.js or main.css file
    app.use(express.static('client/build'))

    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("Express Server Listening on Port " + PORT)
})