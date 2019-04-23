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

Example: 
    { "username": "username",
    "password": "password" }

## Protected Route Endpoints 

The following endpoints require a token for access. 

### Get Notes 
> https://build-week-blackhole.herokuapp.com/api/notes/ 

### Get Notes By Note ID 
> https://build-week-blackhole.herokuapp.com/api/notes/:id 

### Post Note 
> https://build-week-blackhole.herokuapp.com/api/notes/ 

### Update Note 
> https://build-week-blackhole.herokuapp.com/api/notes/:id 

### Force Delete Note 
> https://build-week-blackhole.herokuapp.com/api/notes/:id 


