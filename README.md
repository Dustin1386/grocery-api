# Grocery App

##### Repositories

Server Repo: https://github.com/Dustin1386/grocery-api
Client Repo: https://github.com/Dustin1386/grocery-client

##### Live Links

Vercel Client - Live Link - https://grocery-fgiqtqu4w.vercel.app/
Heroku Server - Live Link - https://dashboard.heroku.com/apps/arcane-headland-93940

## Summary

I frequently go to the grocery store and have a hard time finding certain items,I created this app to help solve that. 
This app lets you enter the location of various products in the store and their location to make them easy to find. 

![image](https://github.com/Dustin1386/grocery-api/blob/master/screenshot-grocery-fgiqtqu4w-vercel-app-1610742292840.png)

## API Documentation

### GET /api/items

Returns an array of items from the server.

### Example Response

```
getAllItems(knex) {
        return knex('items').select('*')
    },
```



### POST /api/items

A submission of a grocery item. Requires name and location.


### PATCH /api/items/:ts_id


### GET /api/items

Returns an array of items from the server.

### Example Response

```
[
    {
        "item_id": 1,
        "location": "11",
        "location_id": "tt9397902",
    
    }
]
```


## Technologies Used

##### FrontEnd

- JavaScript
- React
- React-Router
- Context

##### Backend

- NodeJs
- Express
- Knex
- CORS
- Chai, Mocha, supertest (testing)

##### Server

- PostgreSQL


