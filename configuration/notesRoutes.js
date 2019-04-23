const { authenticate } = require('../authentication/authenticate.js');
const router = require('express').Router(); 
const { setToDestructDb, insert, findBy, findById, find } = require('./notes-helpers.js'); 
const db = require('../database/dbConfig.js');

// GET NOTES 
router.get('/', async (req, res) => { 
    try {
        const user_id = req.decoded.subject; 
        const notes = await db('notes').where({user_id})
        res.status(200).json(notes);
    }
    catch (error) {
        res.status(500).json(error);
    }
}) 

// GET NOTE BY ID 

router.get('/:id', async (req, res) => {
    const { id } = req.params;  
    const user_id = req.decoded.subject; 
    try {
        const note = await db('notes')
        .where({ id })
        .first(); 
        if (note && user_id === note.user_id) {
        res.status(200).json(note); 
        } else {
            res.status(403).json({message: 'you are forbidden from reading this note'})
        }
    } 
    catch (error) {
        res.status(500).json(error)
    }
})

// // POST NOTE
router.post('/', (req, res) => {  
    const note = req.body;
       db('notes').insert(note)
        .then(
        res.status(200).json(note) 
        )
        .catch (error => 
        res.status(500).json(error)
        );
});

// UPDATE NOTE 

router.put('/:id', (req, res) => {
    db('notes')
    .where({id: req.params.id})
    .update(req.body)
    .then(count => {
        if (count>0) {
        db('notes')
        .where({id: req.params.id})
        .first()
        .then(note => { 
        res.status(200)
        .json(note)}) } 
        else {
            res.status(404)
            .json({ error: `Couldn't find the note to update it.`})
        }})
    .catch(error => 
        res.status(500)
        .json({error: `There was an error! ${error}`}))
})

// FORCE DELETE NOTES 

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await db('notes')
    .where({id})
    .del(); 
    res.status(202).json({message: 'note sucked out of the void!', id})
  }
  catch (error) {
      res.status(500).json(error)
  }

})


module.exports = router;