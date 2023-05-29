## API Guide

### Table of Contents

- [Get full items](#get-full-items)
- [Get items with selected attributes](#get-items-with-selected-attributes)
- [Get best sellers](#get-best-sellers)
- [Get item by ID](#get-item-by-id)
- [Get cart, orders, and wishlist by user email](#get-cart-orders-and-wishlist-by-user-email)
- [Add item to user's order](#add-item-to-users-order)
- [Add item to user's cart](#add-item-to-users-cart)
- [Add item to user's wishlist](#add-item-to-users-wishlist)
- [Delete item from user's cart](#delete-item-from-users-cart)
- [Delete item from user's orders](#delete-item-from-users-orders)
- [Delete item from user's wishlist](#delete-item-from-users-wishlist)
- [Get all users](#get-all-users)
- [Get user by email](#get-user-by-email)
- [Add new user](#add-new-user)
- [Update user](#update-user)
- [Delete user](#delete-user)
- [Run Redis](#run-redis)
- [Run microservices](#run-microservices)
- [Run proxy server](#run-proxy-server)
- [Run client server](#run-client-server)

### Get full items

Retrieves full items from the database.

```
GET /app1/get/all/full
```


### Get items with selected attributes

Retrieves items with selected attributes from the database.


```
GET /app1/get/all?title=1&price=1&sold_count=1
```

### Get best sellers

Retrieves the best-selling items from the database.

```
GET /app1/get/bestSellers
```

### Get item by ID

Retrieves an item from the database by its ID.

```
GET /app1/get/:id
```

### Get cart, orders, and wishlist by user email

Retrieves the cart, orders, and wishlist of a user by their email.

```
GET /app1/get/relation/:email
```

### Add item to user's order

Adds an item (using its ID) to the order of a user.

```
POST /app1/add/relation/order/:email/:id
```

### Add item to user's cart

Adds an item (using its ID) to the cart of a user.

```
POST /app1/add/relation/cart/:email/:id
```

### Add item to user's wishlist

Adds an item (using its ID) to the wishlist of a user.

```
POST /app1/add/relation/wishlist/:email/:id
```

### Delete item from user's cart

Deletes an item (using its ID) from the cart of a user.

```
DELETE /app1/delete/relation/cart/:email/:id
```

### Delete item from user's orders

Deletes an item (using its ID) from the orders of a user.

```
DELETE /app1/delete/relation/orders/:email/:id
```

### Delete item from user's wishlist

Deletes an item (using its ID) from the wishlist of a user.

```
DELETE /app1/delete/relation/wishlist/:email/:id
```

### Get all users

Retrieves all users from the database.

```
GET /app2
```

### Get user by email

Retrieves a user from the database by their email.

```
GET /app2/:email
```

### Add new user

Adds a new user to the database.
```
POST /app2/
```

### Update user

Updates a user in the database by their email.

```
PUT /app2/:email
```

### Run Redis

To run Redis, use the following command:

```
-run redis
```


### Run microservices

To run the microservices, execute the necessary commands for each microservice in their own directory.

```
npm run dev
```

### Run proxy server

To run the proxy server, by running nginx.exe:

### Open your browser

Navigate to the following url to check if the proxy server is running:

```
localhost:4000
```



