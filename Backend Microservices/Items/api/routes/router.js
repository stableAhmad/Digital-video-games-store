const express = require('express');
const router = express.Router();
const itemModel = require('../models/item-model')
const relationModel = require('../models/user-item-relation-model')
const cacheClient = require('../utils/items-cache')




//get routes

router.get('/get/all/full', async  (req, res) => {     //retrieving all the items with (all) of their attributes
  const cacheResult  = await cacheClient.read("full")
  if(! cacheResult){
    console.log("cache miss")
    const back = await itemModel.findAllFull()
    cacheClient.write("full", back)
    res.send(back)
  }else{
    console.log("cache hit")
    res.send(cacheResult)
  }
})

router.get('/get/all', async (req, res) => {        //retrieving all the items with (part) of their attributes
  console.log(Object.keys(req.query))
  const back = await itemModel.findAllPart(Object.keys(req.query))
  res.send(back)
})


router.get('/get/bestSellers', async (req, res) => {    //retrieving all the items sorted by sold_count
  const cacheResult = await cacheClient.read("bestSellers")
  if(!cacheResult){
    console.log("cache miss")
    const back = await itemModel.findBestSellers()
    cacheClient.write("bestSellers", back)
    res.send(back)
  }else{
      console.log("cache hit")
      res.send(cacheResult)
  }
  
})

router.get('/get/:id', async (req, res) => {            //getting an item by id
  const back = await itemModel.findByID( req.params.id)
  res.send(back)
})


//relation routing

router.get('/get/relation/:email', async (req, res) => {            
  const back = await relationModel.findBundleByEmail(req.params.email)
  res.send(back)
})



router.post('/add/relation/order/:email', async (req, res)=>{
  console.log(req.params.email)
  const back = await relationModel.addOrder(req.params.email, req.body)
  res.send(back)
})



router.post('/add/relation/cart/:email', async (req, res)=>{
  const back = await relationModel.addCart(req.params.email, req.body)
  res.send(back)
})



router.delete('/delete/relation/cart/:email/:id', async (req, res)=>{
  const back = await relationModel.deleteFromCart(req.params.email, req.params.id)
  res.send(back)
})

module.exports = router;