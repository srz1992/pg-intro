const express = require('express');
const router = express.Router();

// get our connection to the database
const pool = require('../modules/pool')


router.get('/', (req, res) =>{
    console.log('In song-router GET');
    // build a string for the query
    const queryText = 'SELECT * FROM songs';
    pool.query(queryText)
    .then((result)=>{
        console.log('got something back');
        res.send(result.rows)
        
    }).catch((error)=>{
        res.sendStatus(500);
        console.log('error getting all songs: '. err);
    })
});

router.post('/', (req, res) =>{
    console.log('In song-router post');
    res.sendStatus(200);
});

router.put('/', (req, res) =>{
    console.log('In song-router put');
    res.sendStatus(200);
});

router.delete('/:id', (req, res) =>{
    const id = req.params.id;
    console.log('In song-router delete');
    const queryText = 'DELETE FROM songs WHERE id=$1';
    // passing tow things to the query. first the query text.
    // second the values to subsittute into the query for the $1
    // $2, etc. when subbing in multiple things, the otrder is important.

    pool.query(queryText, [id])
    .then((result)=>{
        console.log('successful delete of song:', result);
        res.sendStatus(200);
        
    }).catch((error)=>{
        console.log('error deleting song:', error);
        res.sendStatus(500)
    })
    
    res.sendStatus(200);
});

module.exports = router;

