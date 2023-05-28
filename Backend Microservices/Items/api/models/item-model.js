const mongoDB = require('../mongo.js')


const projection = {"title":0, "price":0, "developer":0, "publisher":0,"sold_count":0, "release_date":0,
                     "available":0, "off":0, "edition":0, "active":0, "description" :0 ,"requirements":0,
                      "guide":0, "platform":0,"genre":0, "currency":0 , "language":0, "age":0 }


function resetProjection(){
  for (let prop in projection) {
      projection[prop] = 0;
    }
}
async function findByID(DBClient, id){

  try{

      const query = { _id: ObjectId(id) }
      const result = await DBClient.database.collection('item').findOne(query)
      return result;

  }catch(err){

      console.log(err.message)
      return false

  }

}

async function findAllFull(DBClient){

  try{

      const result = await DBClient.database.collection('item').find().toArray()
      return result;

  }catch(err){

      console.log(err.message)
      return false

  }

}

async function findAllPart(DBClient, attributes){

  try{
      resetProjection()
      attributes.forEach(x => {
        if(projection.hasOwnProperty(x)){
            projection[x] = 1
        }
      })
      const result = await DBClient.database.collection('item').find({}, projection).toArray()
      return result;

  }catch(err){

      console.log(err.message)
      return false

  }

}

async function findBestSellers(DBClient){
    try{
        let res = await findAllFull(DBClient)
        res.sort((a, b) => b.sold_count - a.sold_count)
        return res
    }catch(err){
      console.log(err.message)
    }
}



//missing website authorization


async function update(DBClient){


}

async function remove(DBClient){

}

async function add(DBClient){

}

async function validateItem(DBClient){

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