const db = require('../database/dbConfig.js');
const cron = require('node-cron');
const moment = require('moment');

function deleteVoidNotes(note) { 
    const { id } = note.id;
    if (/*day on timestamp*/ - note.days_to_destruct === 0) {
   db('notes').where({id}).del()    
   } else end(); 
} 


const task = cron.schedule('* * 12 * * *', () => {
console.log('running every 12 hours'); 



})




module.exports = { deleteVoidNotes };