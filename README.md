
localhost:4000/app1/get/all/full				-get full items		(get)
localhost:4000/app1/get/all?title=1&price=1&sold_count=1	-get full items with some of their attributes	(get)
localhost:4000/app1/get/bestSellers				-get best sellers	(get)
localhost:4000/app1/get/:id					-get item by id	(get)

localhost:4000/app1/get/relation/:email				-get cart , orders and wishlist by user email	(get)
localhost:4000/app1/add/relation/order/:email/:id		-add item (using its id) to the order of some user	(post)
localhost:4000/app1/add/relation/cart/:email/:id		-add item(using its id) to the  cart	(post)
localhost:4000/app1/add/relation/wishlist/:email/:id             -add item (using its id) to the wishlist of the user	(post)

localhost:4000/app1/delete/relation/cart/:email/:id		-delete an item (using its id) from the cart of a user		(delete)
localhost:4000/app1/delete/relation/orders/:email/:id           -delete an item(using its id) from the orders of a user		(delete)
localhost:4000/app1/delete/relation/wishlist/:email/:id         -delete the item (using its id) from the wishlist of a user	(delete)


localhost:4000/app2						-getting all users		(get) 
localhost:4000/app2/email@gmail.com				-getting one user by its email	(get) 

localhost:4000/app2/						-add new user  (post)
localhost:4000/app2/email					-put request	(put)	update user by its email
localhost:4000/app2/email					-delete request		(delete) delete user by its email





-run redis
-run microservices
-run proxy server
-run client server
