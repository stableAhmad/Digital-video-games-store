const express = require('express')
const mongoDB = require('./api/mongo')
const apiRouter = require('./api/routes/router')
const { DBClient } = require('./api/models/item-model')

const app = express()
const PORT_NUMBER = 5000

let dbClient = null
let connectionState = false


app.use(express.json())



async function pre(){
	
	try{

		dbClient = await mongoDB.connect()
		if(dbClient){
			console.log("db connection established")
			DBClient.client = dbClient;
			app.use(apiRouter)
			}else{
				console.log("Database connection failed")
				app.get('*', (req, res) => {
  			res.send('Database connection failed')
					})
		}

	}catch(err){

		console.log(err.message)
		console.log("Database connection failed")
		app.get('*', (req, res) => {
  	res.send('Database connection failed')
  			})
	}
}




pre()


app.on('close', async () => {
	console.log("one close call")
  if(dbClient){
  	const res = await mongoDB.disconnect()
  	if(res){
  		console.log("db connection closed successfully")
  	}else{
  		console.log("closing failed")
  	}
  }

})

app.listen(PORT_NUMBER, ()=>{
	console.log("the item service is listening on port "+PORT_NUMBER)
})