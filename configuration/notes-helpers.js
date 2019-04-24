const db = require('../database/dbConfig.js'); 
const moment = require('moment');

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

function setToDestructDb(note) {
    const timestamp = moment(note.timestamp); 
    const days = note.days_to_destruct;
    const expiration = timestamp.add(days, 'day').format('LLL');
    if (moment() >= expiration) {
        return db('notes').where({ id }).del(); 
    } 
} 

function checkExpiration(note) {
    const timestamp = note.timestamp;
    const days = note.days_to_destruct;
    const expiration = timestamp.add(days, 'day').format('LLL'); 
    if (moment() >= expiration) {
        return note;
    } 
}

function deleteIn7Days () {
return db('notes')
.where(knex.raw('DELETE FROM notes WHERE date < (CURDATE() - INTERVAL 7 DAY'))
} 



module.exports = {
find, 
findBy,
insert,
findById, 
checkExpiration,
setToDestructDb,
deleteIn7Days
}