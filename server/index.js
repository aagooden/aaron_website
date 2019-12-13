const express = require('express')
const app = express()

require('./routes/routes.js')(app)



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("Express Server Listening on Port " + PORT)
})