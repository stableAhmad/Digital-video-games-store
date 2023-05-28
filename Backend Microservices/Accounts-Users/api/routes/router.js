const express = require('express');
const router = express.Router();
const userModel = require('../models/user-model');


// Get routes

router.get('/', async (req, res) => {
  try {
    console.log("Retrieving all items database");
    const users = await userModel.read();
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:email', async (req, res) => {
  try {
    console.log("Retrieving item with email:", req.params.email);
    const user = await userModel.readOne(req.params.email);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Post route

router.post('/', async (req, res) => {
  try {
    console.log("Adding a new item");
    const newUser = req.body;
    const result = await userModel.add(newUser);
    res.json(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Put route

router.put('/:email', async (req, res) => {
  try {
    console.log("Updating item with email:", req.params.email);
    const updatedData = req.body;
    const result = await userModel.update(req.params.email, updatedData);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete route

router.delete('/:email', async (req, res) => {
  try {
    console.log("Deleting item with email:", req.params.email);
    const result = await userModel.remove(req.params.email);
    if (result) {
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
