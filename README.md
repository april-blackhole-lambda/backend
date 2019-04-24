# Blackhole API 

This API is hosted at https://build-week-blackhole.herokuapp.com/. 

## Dependencies 
* bcryptjs
* cors
* dotenv
* express
* helmet
* jsonwebtoken
* knex
* node
* pg
* sqlite3 

## Authentication Endpoints 

### Register 
> https://build-week-blackhole.herokuapp.com/api/register 

This endpoint requires a POST request with a username and a password in JSON format. Usernames must be unique. 

Example: 
    { "username": "username",  
    "password": "password" } 


### Login 
> https://build-week-blackhole.herokuapp.com/api/login 

This endpoint requires a POST request with a username and a password in JSON format. The username and password **must have already been registered** or it will not work. 

> Example: 
    { "username": "username",  
    "password": "password" }

## Protected Route Endpoints 

The following endpoints require a token for access. 

### Get Notes 
> https://build-week-blackhole.herokuapp.com/api/notes/ 
This is the endpoint to get all notes pertaining to the individual user that is logged in. 

### Get Note By Note ID 
> https://build-week-blackhole.herokuapp.com/api/notes/:id 
This is the endpoint to get a note by the note's id.

### Post Note 
> https://build-week-blackhole.herokuapp.com/api/notes/ 

This endpoint requires a POST request with the following in JSON format: 
* **title**   
This is what the note is called and should be a **string**. 
* **text**  
This is the body of the note and it should be **text**. 
* **category**  
This is the category or tag to assign the note and it should be a **string**. It will default to "uncategorized" if a category is not provided. 
* **days_to_destruct**   
This is the number of days for the note to persist in the blackhole and it should be a positive **integer**. The maximum number of days the user can set is 24. It will default to 1 day if a number of days is not provided. 
* **user_id** 
This is the user_id -- This is sent back with the payload that includes the token. 

> Example:   
    { "title": "My Note",  
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",   
    "category": "dummy-text",   
    "days_to_destruct": 5, 
    "user_id": 1 }

### Update Note 
> https://build-week-blackhole.herokuapp.com/api/notes/:id 
This is the endpoint to update a note. It should be sent as a PUT request. 

### Force Delete Note 
> https://build-week-blackhole.herokuapp.com/api/notes/:id 
This is the endpoint to force delete a note immediately. It should be sent as a DELETE request. 

