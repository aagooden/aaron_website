module.exports = (app) => {
    app.get('/home', (req, res) => {
        res.send("What is up buttercup Joshua is a goofball")
    })
}