const ItemsService = require('../src/items-service')
const knex = require('knex')
const {expect} = require('chai')

describe('items service object', function () {
    let db;
    let testitems = [
      {
        items_id: 1,
        items: 'beans',
      },
      {
        items_id: 2,
        items: 'cheese',
      },
      {
        items_id: 3,
        items: 'hotdogs',
        
      },
    ];
  
    before('setup db', () => {
      db = knex({
        client: 'pg',
        connection: process.env.TEST_DATABASE_URL,
      });
    });
  
    before('clean db', () =>
      db.raw('TRUNCATE TABLE items RESTART IDENTITY CASCADE')
    );
    afterEach('clean db', () =>
      db.raw('TRUNCATE TABLE items RESTART IDENTITY CASCADE')
    );
  
    after('destroy db connection', () => db.destroy());
  
    context('Given "itmes" has data', () => {
      beforeEach(() => {
        return db.into('items').insert(testItems);
      });
  
      it('getAllItems() resolves all items from "items" table', () => {
        return ItemsService.getAllItems(db).then(actual => {
          expect(actual).to.eql(testitems);
        });
      });
    });
  
    context('Given "items" has no data', () => {
      it('getAllitems() resolves an empty array', () => {
        return itemsService.getAllitems(db).then(actual => {
          expect(actual).to.eql([]);
        });
      });
      it('insertItems() inserts a new item and resolves the new item with a "items_id"', () => {
        this.retries(3);
        const newItem = {
          items: "No",
        };
        return itemsService.insertBark(db, newItem).then(actual => {
          expect(res => {
            expect(res.body.items).to.eql(newItem.items);
            expect(res.body.media_id).to.eql(newItem.media_id);
            const expected = new Date().toLocaleString();
            const actual = newDate(res.body.date_created).toLocaleString();
            expect(actual).to.eql(expected);
          });
        });
      });
    });
  });