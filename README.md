# Blackhole API 

This API is hosted at https://build-week-blackhole.herokuapp.com/. 

## Dependencies 

## Authentication Endpoints 

### Register 
> https://build-week-blackhole.herokuapp.com/api/register 

This endpoint requires a POST request with a username and a password in JSON format.

Example: 
    { "username": "username",
    "password": "password" } 

Usernames must be unique. 

### Login 
> https://build-week-blackhole.herokuapp.com/api/login 

This endpoint requires a POST request with a username and a password in JSON format. The username and password **must have already been registered**. 

Example: 
    { "username": "username",
    "password": "password" }

## Protected Route Endpoints 

The following endpoints require a token for access. 

### Get Notes 
> https://build-week-blackhole.herokuapp.com/api/notes/ 

### Get Notes By Note Id 
> https://build-week-blackhole.herokuapp.com/api/notes/:id 

### Post Note 
> https://build-week-blackhole.herokuapp.com/api/notes/ 

### Update Note 
> https://build-week-blackhole.herokuapp.com/api/notes/:id 

### Force Delete Note 
> https://build-week-blackhole.herokuapp.com/api/notes/:id 


