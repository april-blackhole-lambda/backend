const db = require('../database/dbConfig.js');

function deleteVoidNotes(note) { 
    const { id } = note.id;
    if (/* day on the timestamp */ - note.days_to_destruct === 0) {
   db('notes').where({id}).del()    
   } else end();
} 

module.exports = { deleteVoidNotes };