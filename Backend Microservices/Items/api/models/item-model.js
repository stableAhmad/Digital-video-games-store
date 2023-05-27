const mongoDB = require('../mongo.js')




async function read(DBClient){

}

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