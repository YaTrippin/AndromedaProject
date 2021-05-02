const express = require('express')
const cors = require('cors')
const path = require('path')


const app = express()
const PORT = 8080

const example_modules = [
	{ name: "Calendar", version: 0, desc: "yet another calendar", running: true, url: "/calendar" },
	{ name: "Todo", version: 1, desc: "nothing todo", running: true, url: "/todo" },
	{ name: "Lights", version: 2, desc: "still so dark", running: true, url: "/lights" },
	{ name: "Linux", version: 0, desc: "use arch btw", running: true, url: "/linux" }
]


app.use(express.static('static'))
app.use(cors())

// app.get(['/', '/index'], (req, res) => {
// 	res.sendFile(path.join(__dirname + '/index.html'))
// })

// THIS IS JUST FOR TESTING FRONT END -- WILL BE IMPLEMENTED IN ANDROMEDA
app.get(['/get_modules', '/index'], (req, res) => {
	console.log('GET /get_modules')
	res.json(example_modules)
})

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`)
})
