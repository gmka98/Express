import express from 'express'

const PORT = 1600
const app = express()

app.get('/',(req, res) => res.send({info: 'Hello World!'}))

app.listen(PORT, () => console.log('Server started: http://localhost:${PORT}/'))
app.post('/signup',(req,res) => {
/*.....*/
})