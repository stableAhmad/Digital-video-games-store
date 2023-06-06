const express = require('express')
const mongoDB = require('./api/mongo')
const apiRouter = require('./api/routes/router')
const { itemModelDBClient } = require('./api/models/item-model')
const { relationDBClient } = require('./api/models/user-item-relation-model')
const cors = require('cors')




const app = express()
const PORT_NUMBER = 5000

let dbClient = null
let connectionState = false


app.use(express.json())

app.use(cors());

app.use(cors({
  origin: '*',
  methods: ['GET', "POST", 'DELETE', "PUT", "PATCH"],
}));


async function pre(){
	
	try{

		dbClient = await mongoDB.connect()
		if(dbClient){
			console.log("db connection established")
			itemModelDBClient.client = dbClient;
			relationDBClient.client = dbClient
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




app.listen(PORT_NUMBER, ()=>{
	console.log("the item service is listening on port "+PORT_NUMBER)
})



app.on('close', async () => {
  if(dbClient){
  	const res = await mongoDB.disconnect()
  	if(res){
  		console.log("db connection closed successfully")
  	}else{
  		console.log("closing failed")
  	}
  }

})