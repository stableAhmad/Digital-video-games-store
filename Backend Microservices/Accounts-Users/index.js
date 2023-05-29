const express = require('express');
const mongoDB = require('./api/mongo');
const { DBClient } = require('./api/models/user-model');
const apiRouter = require('./api/routes/router');
const cors = require('cors')

const app = express();
const PORT_NUMBER = 7000;
let dbClient = null;

app.use(express.json());
app.use(cors());

app.use(cors({
  origin: '*',
  methods: ['GET', "POST", 'DELETE', "PUT", "PATCH"],
}));
async function initializeApp() {
  try {
    dbClient = await mongoDB.connect();
    if (dbClient) {
      console.log("Database connection established");
      DBClient.client = dbClient;
      app.use(apiRouter);
    } else {
      console.log("Database connection failed");
      app.get('*', (req, res) => {
        res.send('Database connection failed');
      });
    }
  } catch (err) {
    console.log(err.message);
    console.log("Database connection failed");
    app.get('*', (req, res) => {
      res.send('Database connection failed');
    });
  }
}


initializeApp();


app.on('close', async () => {
  console.log("Closing Database connection");
  if (dbClient) {
    const res = await mongoDB.disconnect();
    if (res) {
      console.log("Database connection closed successfully");
    } else {
      console.log("Closing failed");
    }
  }
});

// Start the server
app.listen(PORT_NUMBER, () => {
  console.log('User service listening on port ' + PORT_NUMBER);
});
