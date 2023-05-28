const mongoDB = require('../mongo.js')
const { ObjectId } = require('mongodb')

const bestSellersMax = 40

let DBClient = {client : "temp"}


let projection = { }


function resetProjection(){
  for (let prop in projection) {
      projection[prop] = 0;
    }
}

async function findByID(id){

  try{

      const query = { _id: new ObjectId(id) }
      const result = await DBClient.client.db("items").collection('item').findOne(query)

      return result;

  }catch(err){

      console.log(err.message)
      return false

  }

}

async function findAllFull(){

  try{

      const result = await DBClient.client.db("items").collection('item').find().toArray()
      return result;

  }catch(err){

      console.log(err.message)
      return false

  }

}

async function findAllPart(attributes){

  try{
    resetProjection()
      attributes.forEach(x => {   
            projection[x] = 1
      })
 
      projection._id = 1
      console.log(projection)
      const result = await DBClient.client.db("items").collection('item').find({}, {projection : projection}).toArray()
      return result;

  }catch(err){

      console.log(err.message)
      return false

  }

} 

async function findBestSellers(){
    try{
        let res = await findAllFull(DBClient)
        res.sort((a, b) => b.sold_count - a.sold_count)
        if (res.length > 50) {
              return res.slice(0, 50)
        } else {
            return res; 
        }
    }catch(err){
      console.log(err.message)
    }
}



module.exports = {
  DBClient:DBClient,
  findByID: findByID,
  findAllFull:findAllFull,
  findAllPart:findAllPart,
  findBestSellers:findBestSellers
}


//missing website authorization


async function update(){


}

async function remove(){

}

async function add(){

}

async function validateItem(){

}


												//model file requirements

//		1-specifying the schema for a single item entity
/*
db.runCommand({
  collMod: 'item',
  validator: {
    $jsonSchema: {
      type: 'object',
      properties: {
        title: {
          type: 'string'
        },
        price: {
          type: 'number'
        },
        developer: {
          type: 'string'
        },
        publisher: {
          type: 'string'
        },
        sold_count: {
          type: 'number'
        },
        release_date: {
          bsonType: 'date'
        },
        available: {
          type: 'boolean'
        },
        off: {
          type: 'number'
        },
        edition: {
          type: 'string'
        },
        active: {
          type: 'boolean'
        },
        description: {
          type: 'string'
        },
        requirements: {
          type: 'object',
          properties: {
            cpu: {
              type: 'string'
            },
            graphics: {
              type: 'string'
            },
            memory: {
              type: 'string'
            },
            OS: {
              type: 'string'
            },
            storage: {
              type: 'number'
            },
            storage_unit: {
             type: 'string'
            }
          }
        },
        guide: {
          type: 'string'
        },
        platform: {
          type: 'string',
          'enum': [
            'playstation',
            'xbox',
            'pc',
            'mobile',
            'nintendo'
          ]
        },
        genre: {
          type: 'string',
          'enum': [
            'action',
            'adventure',
            'role-playing',
            'simulation',
            'strategy',
            'sports',
            'puzzle',
            'platform',
            'fighting',
            'horror',
            'racing',
            'music/rhythm',
            'party/minigame',
            'educational',
            'first-person shooter',
            'third-person shooter',
            'tactical shooter',
            'stealth',
            'survival',
            'massively multiplayer'
          ]
        },
        currency: {
          type: 'string',
          'enum': [
            'USD',
            'GBP',
            'EUR',
            'EGP',
            'CAD',
            'AUD',
            'JPY',
            'CNY'
          ]
        },
        language: {
	type: 'string',
	'enum': [
	'EN',
	'ES',
	'ZH',
	'HI',
	'AR',
	'PT',
	'BN',
	'RU',
	'FR',
	'DE',
	'JA',
	'KO',
	'TR',
	'IT',
	'PL',
	'NL',
	'SV',
	'NO',
	'FI'
	]
	},
	age:{
	type:'number'
	}
	},
	required: [
	'platform',
	'genres',
	'currency',
	'languages'
	],
	}
	}
	})

*/