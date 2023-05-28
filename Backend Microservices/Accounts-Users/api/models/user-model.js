let DBClient = { client: "temp" };

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
    const exists = await readOne(newUser.email);
    if(exists){
      return false;
    }
    await usersCollection.insertOne(newUser);
    return true; // Indicate that the user was successfully added
  } catch (error) {
    console.log(error.message);
    return false; // Indicate that an error occurred during the addition process
  }
}

module.exports = {
  DBClient:DBClient,
  read,
  readOne,
  update,
  remove,
  add,
};
