module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send("What is up buttercup")
    })
}