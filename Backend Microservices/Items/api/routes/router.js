const express = require('express');
const router = express.Router();
const itemModel = require('../models/item-model')




//get routes

router.get('/get/all/full', async  (req, res) => {     //retrieving all the items with (all) of their attributes
  const back =  await itemModel.findAllFull()
  res.send(back)
})

router.get('/get/all/*', async (req, res) => {        //retrieving all the items with (part) of their attributes
  const back = await itemModel.findAllPart(Object.values(req.params))
  res.send(back)
})


router.get('/get/bestSellers', async (req, res) => {    //retrieving all the items sorted by sold_count
  const back = await itemModel.findBestSellers()
  res.send(back)
})

router.get('/get/:id', async (req, res) => {            //getting an item by id
  const back = await itemModel.findByID( req.params.id)
  res.send(back)
})








module.exports = router;