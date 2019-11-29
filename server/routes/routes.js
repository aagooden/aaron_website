module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send("What is up buttercup Joshua is a goofball")
    })

    app.get('/home', (req, res) => {
        res.send("HOME PAGE!!!!")
    })
}