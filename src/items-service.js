const ItemsService = {
    getAllItems(knex) {
        return knex('items').select('*')
    },
    insertItems(knex, newItems) {
        return knex
            .insert(newItems)
            .into('items')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    getById(knex, ID) {
        return knex('items')
            .select('*')
            .where('id', ID)
            .first()
    },
    deleteItems(knex, ID) {
        return knex('items')
            .where('id', ID)
            .delete()
    },
    updateItems(knex, ID, newData) {
        return knex('items')
            .where('id', ID)
            .update(newData)
    }
}

module.exports = ItemsService