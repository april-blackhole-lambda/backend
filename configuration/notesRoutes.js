const { authenticate } = require('../authentication/authenticate.js');
const router = require('express').Router(); 
const Notes = require('./Notes.js'); 
const db = require('../database/dbConfig.js');

// GET NOTES 
router.get('/', authenticate, (req, res) => { 
    db('notes')
    .then(notes => {
        res.status(200)
        .json(notes)
    }) 
    .catch(error => {
        res.status(500)
        .json(error)
    })
})

// POST NOTE
router.post('/', authenticate, (req, res) => {
    db('notes')
    .insert(req.body)
    .then(ids => {
        const [id] = ids 
        db('notes')
        .where({id})
        .first()
        .then(note => {
            res.status(200)
            .json({message: 'your note was successfully created', 
            note})
        })
    })
    .catch(error => {
        res.status(500)
        .json(error)
    })
})

// UPDATE NOTE 

router.put('/:id', authenticate, (req, res) => {
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

router.delete('/:id', authenticate, (req, res) => {
    Notes.findById(req.params.id).del()
    .then(count => {
        if (count > 0) {
            return res.status(204).json({message: 'Deleted!'})
        } else end();
    })
    .catch(error => {
        res.status(500)
        .json(error)
    })
})


module.exports = router;