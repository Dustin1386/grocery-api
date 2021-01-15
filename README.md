# HollyWoof Server

##### Repositories

Server Repo: https://github.com/Dustin1386/grocery-api
Client Repo: https://github.com/Dustin1386/grocery-client

##### Live Links

Vercel Client - Live Link - https://grocery-fgiqtqu4w.vercel.app/
Heroku Server - Live Link - https://dashboard.heroku.com/apps/arcane-headland-93940

## Summary

I frequently go to the grocery store and have a hard time finding certain items,I created this app to help solve that. 
This app lets you enter the location of various products in the store and their location to make them easy to find. 

![image](https://user-images.githubusercontent.com/55715053/104391907-f6982000-550e-11eb-8b72-f7ef17f44d29.png)

## API Documentation

### GET /api/timestamps

Returns an array of items from the server.

### Example Response

```
getAllItems(knex) {
        return knex('items').select('*')
    },
```



### POST /api/timestamps

A submission of a grocery item. Requires name and location.

```
[
    {
        "timestamp": "01:25:00",
        "comment": "Crazy Loud",
        "volume": "High",
        "confirmations": 0,
        "likes": 0,
        "dislikes" 0,
        "user_id": 1,
        "media_id": "tt9397902",
        "date_created": "2021-01-14T16:05:43.157Z"
    }
]
```

### PATCH /api/timestamps/:ts_id

A request to update a timestamp.

### DELETE /api/timestamps/:ts_id

A request to delete a timestamp.



### GET /api/barks

Returns an array of barks from the server.

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

- PostgreSQL# HollyWoof Server


