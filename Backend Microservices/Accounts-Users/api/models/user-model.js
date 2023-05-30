let DBClient = { client: "temp" };
const bcrypt = require("../utils/encryption");

// Returns all users in the database
async function read() {
  try {
    const usersCollection = DBClient.client.db("users").collection("user");
    const users = await usersCollection.find({}).toArray();
    return users;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

// Retrieves a specific user based on the email
async function readOne(email) {
  try {
    const usersCollection = DBClient.client.db("users").collection("user");
    const user = await usersCollection.findOne({ email });
    console.log(user);
    return user;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

// Updates a specific user based on the email with new data
async function update(email, newData) {
  try {
    const usersCollection = DBClient.client.db("users").collection("user");
    const user = await usersCollection.findOne({ email });

    if (user) {
      await usersCollection.updateOne({ email }, { $set: newData });
      return true; // Indicate that the user was successfully updated
    } else {
      return false; // Indicate that the user was not found
    }
  } catch (error) {
    console.log(error.message);
    return false; // Indicate that an error occurred during the update process
  }
}

// Removes a specific user based on the email
async function remove(email) {
  try {
    const usersCollection = DBClient.client.db("users").collection("user");
    const user = await usersCollection.findOne({ email });

    if (user) {
      await usersCollection.deleteOne({ email });
      return true; // Indicate that the user was successfully removed
    } else {
      return false; // Indicate that the user was not found
    }
  } catch (error) {
    console.log(error.message);
    return false; // Indicate that an error occurred during the removal process
  }
}

// Adds a new user to the database
async function add(newUser) {
  try {
    const usersCollection = DBClient.client.db("users").collection("user");
    const newInstance = {
      email: newUser.email,
      orders: [],
      wishlist: [],
      cart: []
    }
    const usersCollection2 = DBClient.client.db("user-item-relations").collection("relation");
    await usersCollection2.insertOne(newInstance);
    const passwordHash = await bcrypt.encryptPassword(newUser.password);
    newUser.password = passwordHash;
    await usersCollection.insertOne(newUser);
    return true; // Indicate that the user was successfully added
  } catch (error) {
    console.log(error.message);
    return false; // Indicate that an error occurred during the addition process
  }
}

// Validates a user's credentials
async function validateUser(email, password){
  try {
    const usersCollection = DBClient.client.db("users").collection("user");
    const user = await usersCollection.findOne({ email });
    if (user) {
      const result = await bcrypt.comparePassword(password, user.password);
      return result;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

module.exports = {
  DBClient: DBClient,
  read,
  readOne,
  update,
  remove,
  add,
  validateUser
};



/*
{
  $jsonSchema: {
    type: 'object',
    properties: {
      firstName: {
        type: 'string'
      },
      lastName: {
        type: 'string'
      },
      phoneNumber: {
        type: 'object',
        properties: {
          countryCode: {
            type: 'string',
            'enum': [
              '+1',
              '+34',
              '+86',
              '+91',
              '+20',
              '+55',
              '+880',
              '+7',
              '+33',
              '+49',
              '+81',
              '+82',
              '+90',
              '+39',
              '+48',
              '+31',
              '+46',
              '+47',
              '+358'
            ]
          },
          number: {
            type: 'string',
            minLength: 10,
            maxLength: 10
          }
        },
        required: [
          'countryCode',
          'number'
        ]
      },
      country: {
        type: 'string',
        'enum': [
          'United States',
          'Spain',
          'China',
          'India',
          'Egypt',
          'Brazil',
          'Bangladesh',
          'Russia',
          'France',
          'Germany',
          'Japan',
          'South Korea',
          'Turkey',
          'Italy',
          'Poland',
          'Netherlands',
          'Sweden',
          'Norway',
          'Finland'
        ]
      },
      email: {
        type: 'string',
        pattern: '^\\S+@\\S+\\.\\S+$',
        maxLength: 50
      },
      password: {
        type: 'string'
      }
    },
    required: [
      'firstName',
      'lastName',
      'phoneNumber',
      'country',
      'email',
      'password'
    ]
  }
}

*/
