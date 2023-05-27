const express = require('express')
const mongoDB = require('./api/mongo')


const app = express()
const PORT_NUMBER = 5000
let dbClient = null

async function pre(){
	dbClient = await mongoDB.connect()
}

pre()

app.get('/', (req, res)=>{

	res.send("item server entry")
})



app.listen(PORT_NUMBER, ()=>{
	console.log("the item service is listening on port "+PORT_NUMBER)
})