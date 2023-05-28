const express = require('express');
const router = express.Router();
const itemModel = require('../models/item-model')
const { dbClient } = require('../../index')



//get routes

router.get('/get/all/full', (req, res) => {     //retrieving all the items with (all) of their attributes
  itemModel.read(dbClient)
})

router.get('/get/all/*', (req, res) => {        //retrieving all the items with (part) of their attributes
  itemModel.findAllPart(dbClient)
})


router.get('/get/bestSellers', (req, res) => {    //retrieving all the items sorted by sold_count
  itemModel.read(dbClient)
})

router.get('/get/:id', (req, res) => {            //getting an item by id
  itemModel.findByID(dbClient, req.params.id)
})








module.exports = router;