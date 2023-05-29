const mongoDB = require('../mongo.js')
const { ObjectId } = require('mongodb')


let relationDBClient = {client : "temp"}




async function findBundleByEmail(email){

  try{

    const query = { email: email }
    const result = await relationDBClient.client.db("user-item-relations").collection('relation').findOne(query)

    return result;

  }catch(err){

    console.log(err.message)
    return false

  }

}


async function addOrder(email, id){

  try{
    
    const relation = await relationDBClient.client.db("user-item-relations").collection('relation').findOne({ email: email })

    if(!relation){
      const newInstance = {email:email,
        orders:[id],
        wishlist:[],
        cart:[]}

        await relationDBClient.client.db("user-item-relations").collection('relation').insertOne(newInstance,function(err, result) {
          if (err) {
            console.log(err);
            console.log("insertion failed")
            return false
          } else {

            return true;
          }
        })

    }else{
        let newOrderVal = relation.orders
        newOrderVal.push(id)
        const back = await relationDBClient.client.db("user-item-relations").collection('relation').updateOne({ email: email },          
          { $set: { orders: newOrderVal} })
    }
    }catch(err){
      console.log(err)
    }
  }
        
     

       


async function addCart(email, id){

  try{
    
    const relation = await relationDBClient.client.db("user-item-relations").collection('relation').findOne({ email: email })

    if(!relation){
      const newInstance = {email:email,
        orders:[],
        wishlist:[],
        cart:[id]}

        await relationDBClient.client.db("user-item-relations").collection('relation').insertOne(newInstance,function(err, result) {
          if (err) {
            console.log(err);
            console.log("insertion failed")
            return false
          } else {

            return true;
          }
        })

    }else{
        let newCart = relation.cart
        newCart.push(id)
        const back = await relationDBClient.client.db("user-item-relations").collection('relation').updateOne({ email: email },          
          { $set: { cart: newCart} })
    }
    }catch(err){
      console.log(err)
    }
  }


async function addWishlist(email, id){

  try{
    
    const relation = await relationDBClient.client.db("user-item-relations").collection('relation').findOne({ email: email })

    if(!relation){
      const newInstance = {email:email,
        orders:[],
        wishlist:[id],
        cart:[]}

        await relationDBClient.client.db("user-item-relations").collection('relation').insertOne(newInstance,function(err, result) {
          if (err) {
            console.log(err);
            console.log("insertion failed")
            return false
          } else {

            return true;
          }
        })

    }else{
        let newList = relation.wishlist
        newList.push(id)
        const back = await relationDBClient.client.db("user-item-relations").collection('relation').updateOne({ email: email },          
          { $set: { wishlist: newList} })
    }
    }catch(err){
      console.log(err)
    }
  }



async function deleteFromCart(email, id){

  try{
    let target = await relationDBClient.client.db("user-item-relations").collection('relation').findOne({email : email})
    let newCart = target.cart
    let index = newCart.indexOf(id)
    newCart.splice(index, 1)
    await relationDBClient.client.db("user-item-relations").collection('relation').updateOne(
      { email: email },
      { $set: { cart: newCart }})
  
} catch(err){
  console.log("something went wrong")
  return false  
}

}


async function deleteFromWhishlist(email, id){

  try{
    let target = await relationDBClient.client.db("user-item-relations").collection('relation').findOne({email : email})
    let newList = target.wishlist
    let index = newList.indexOf(id)
    newList.splice(index, 1); 
    await relationDBClient.client.db("user-item-relations").collection('relation').updateOne(
      { email: email },
      { $set: { wishlist: newList } },
      function(err, result) {
        if (err) {
          console.log("deletion failed")
          return false
        } else {
          console.log("item deleted")
          return true;
        }
      })
  
} catch(err){
  console.log("something went wrong")
  return false  
}
}


async function deleteFromOrders(email, id){

  try{
    let target = await relationDBClient.client.db("user-item-relations").collection('relation').findOne({email : email})
    let newOrders = target.orders
    let index = newOrders.indexOf(id)
    newOrders.splice(index, 1); 
    await relationDBClient.client.db("user-item-relations").collection('relation').updateOne(
      { email: email },
      { $set: { orders: newOrders }},
      function(err, result) {
        if (err) {
          console.log("deletion failed")
          return false
        } else {
          console.log("item deleted")
          return true;
        }
      })
  
} catch(err){
  console.log("something went wrong")
  return false  
}
}



 


module.exports = {
  relationDBClient:relationDBClient,
  findBundleByEmail: findBundleByEmail,
  addOrder:addOrder,
  addWishlist:addWishlist,
  addCart:addCart,
  deleteFromOrders:deleteFromOrders,
  deleteFromWhishlist:deleteFromWhishlist,
  deleteFromCart:deleteFromCart
}




												//model file requirements

//		1-specifying the schema for a single item entity
/*
{
  $jsonSchema: {
    bsonType: "object",
    required: ["email", "cart", "order", "favlist"],
    properties: {
      email: {
        bsonType: "string"
      },
      cart: {
        bsonType: "array"
      },
      order: {
        bsonType: "array"
      },
      favlist: {
        bsonType: "array"
      }
    }
  }
}

*/