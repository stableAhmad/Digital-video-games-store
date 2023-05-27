const express = require('express')
const mongoDB = require('./mongo')


const app = express()
const PORT_NUMBER = 5000


app.get('/', (req, res)=>{

	res.send("item server entry")
})



app.listen(PORT_NUMBER, ()=>{
	console.log("the item service is listening on port "+PORT_NUMBER)
})