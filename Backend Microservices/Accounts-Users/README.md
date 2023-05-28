## API Guide

### Table of Contents

- [Get all users with full attributes](#get-all-users-with-full-attributes)
- [Get user with email](#get-user-with-email)
- [Add new user](#add-new-user)
- [Update user](#update-user)
- [Delete user](#delete-user)

### Get all users with full attributes

Retrieves all items in the database with all their attributes.

```
GET /
```

##### Response

Returns an array of objects, where each object represents a user in the database. The object includes all the attributes of the user.

### Get user with email

Retrieves the user in the database with the corresponding email passed in the URL.

```
GET /email@gmail.com
```

##### Parameters

- `email` (string, required): The email of the user to retrieve.

##### Response

Returns a user object if found, representing a user in the database. If the user is not found, returns a 404 error.

### Add new user

Adds a new user to the database.

```
POST /
```

##### Request Body

The request body should contain the data for the new user.

##### Response

Returns the result of the add operation. If the user is successfully added, returns the result object. Otherwise, returns a 500 server error.

### Update user

Updates an existing user in the database.

```
PUT /:email
```


##### Parameters

- `email` (string, required): The email of the user to update.

##### Request Body

The request body should contain the updated data for the user.

##### Response

Returns the result of the update operation. If the user is successfully updated, returns the result object. If the user is not found, returns a 404 error. If there is a server error, returns a 500 server error.

### Delete user

Deletes a user from the database.

```
DELETE /:email
```


##### Parameters

- `email` (string, required): The email of the user to delete.

##### Response

Returns a message indicating the success of the deletion operation. If the user is successfully deleted, returns a message indicating the deletion. If the user is not found, returns a 404 error. If there is a server error, returns a 500 server error.

---

## Conclusion
This API guide provides a quick reference to the endpoints available in your application, along with their input parameters and expected output. Use this guide as a reference to help you build clients or integrate with other services.

---

**Note**: Make sure to replace `:email` in the route paths with the actual email value when making requests to the API.
