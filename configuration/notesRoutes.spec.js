const notesRoutes = require('./notesRoutes.js');
const db = require('../database/dbConfig.js');

describe('notes routes', () => {
    afterEach(async () => {
        await db('notes').truncate()
    })
    describe('insert()', () => {
        it('should insert the provided note into the db', async () => {
            await db('notes').insert({ 
                title: 'test note', 
                text: 'this is a test note',
                category: 'testing', 
                days_to_destruct: 4, 
                user_id: 1
            })

            const notes = await db('notes'); 
            expect(notes).toHaveLength(1); 
        }) 

        it('should insert the provided note into the db', async () => {
          let note = await db('notes').insert({title: 'test note', 
          text: 'this is a test note',
          category: 'testing', 
          days_to_destruct: 4, 
            user_id: 1 }) 
          expect ('test note').toBe('test note')

        })
    })
})