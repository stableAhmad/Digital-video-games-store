const express = require('express')
const mongoDB = require('./api/mongo')
const apiRouter = require('./api/routes/router')

const app = express()
const PORT_NUMBER = 5000
let dbClient = null

async function pre(){
	dbClient = await mongoDB.connect()
}

pre()

if(dbClient){
	module.exports = dbClient;
}


//get the api routers
app.get('/', (req, res)=>{

	res.send("item server entry")
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

app.listen(PORT_NUMBER, ()=>{
	console.log("the item service is listening on port "+PORT_NUMBER)
})