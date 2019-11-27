const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("What is up buttercup")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("Server Listening on Port " + PORT)
})