const express = require('express')
const xss = require('xss')
const path = require('path')
const ItemsService = require('./items-service')

const itemsRouter = express.Router()
const jsonParser = express.json()

const sanitizeitems = items => ({
    id: items.id,
    name: xss(items.name),
    location: xss(items.location)
})

itemsRouter
    .route('/')
    .get((req, res, next) => {
        ItemsService.getAllItems(
            req.app.get('db')
        )
        .then(items => {
            console.log(items)
            res.json(items.map(sanitizeitems))
        })
        .catch(next)
    })
    .post(jsonParser, (req, res, next) => {
        const { name, location } = req.body
        const newItems = {name, location}

        if(!newItems) {
                return res.status(400).json({
                    error: { message: `Missing name in request`}
                })
        }

        return ItemsService.insertItems(req.app.get('db'), newItems)
            .then(name,location => {
                res
                    .status(201)
                    .location(path.posix.join(req.originalUrl, `/${name.name_id, location.location_id}`))
                    .json(sanitizeitems(name))
            })
            .catch(next)
    })

itemsRouter
    .route('/:id')
    .all((req, res, next) => {
        ItemsService.getById(req.app.get('db'), req.params.id)
            .then(items => {
                if (!items) {
                    return res.status(404).json({
                        error: { message: 'items does not exist'}
                    })
                }
                res.items = items
                next()
            })
    })
    .get((req, res, next) => {
        res.json(sanitizeitems(res.items))
    })
    .delete((req, res, next) => {
        ItemsService.deleteitems(req.app.get('db'), req.params.id)
            .then(() => {
                res.status(204).end()
            })
            .catch(next)
    })
    .patch(jsonParser, (req, res, next) => {
        const { name} = req.body
        const itemsUpdate = {name, location}

        if(!name) {
            return res.status(400).json({
                error: { message: 'Request must contain items name'}
            })
        }
        ItemsService.updateitems(req.app.get('db'), req.params.id, itemsUpdate)
            .then(() => {
                res.status(204).end()
            })
            .catch(next)
    })

module.exports = itemsRouter