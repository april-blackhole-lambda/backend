const db = require('../database/dbConfig.js'); 

function find() {
    return db('notes');
} 

function findBy(filter) {
 return db('notes').where(filter);
}


function findById(id) {
    return db('notes')
    .select('title','id')
    .where({ id })
    .first();
} 

async function insert(note) {
const id = await db('notes').insert(note, 'id');

return db('notes')
.where({id})
.first()
}

function setToDestructDb(days) {
    setTimeout(() => {
    db('notes').where({id}).first().del()
    }, days * 24 * 60 * 60 * 1000); // days * 86400000ms (i.e. 24 hours)
    
} // maximum 24 days per limits of JS


module.exports = {
find, 
findBy,
insert,
findById, 
setToDestructDb 
}