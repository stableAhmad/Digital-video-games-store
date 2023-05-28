##API Guide


###Table of Contents

*Get all items with full attributes
*Get all items with partial attributes
*Get best selling items
*Get item by ID

###Get all items with full attributes

Retrieves all items in the database with all their attributes.

```
GET /get/all/full
```


#####Response

Returns an array of objects, where each object represents an item in the database. The object includes all the attributes of the item.


###Get all items with partial attributes

Retrieves all items in the database with some of their attributes, based on the query parameters passed in the URL.

```
GET /get/all?title=1&price=1&sold_count=1
```

#####Query Parameters

| Parameter | Description | 
|------|-----|
|title|retrieve the item with the title attribute.|
|price|retrieve the item with the title price.| 
|genre|retrieve the item with the title genre.|


#####Response

Returns an array of objects, where each object represents an item in the database. The object includes only the attributes specified in the query parameters.


###Get best selling items

Retrieves all items in the database, sorted in descending order based on the number of times they have been sold.


```
GET /get/bestSellers
```


#####Response

Returns an array of objects, where each object represents an item in the database. The objects are sorted in descending order based on the number of times they have been sold.


###Get item by ID

Retrieves an item in the database by its ID.


```
GET /get/:id
```

Parameters

| Parameter | Description | 
|------|-----|
|id|The ID of the item to retrieve.|

#####Response

Returns an object representing the item in the database with the specified ID.

###Conclusion

This API guide provides a quick reference to the endpoints available in your application, along with their input parameters and expected output. Use this guide as a reference to help you build clients or integrate with other services.