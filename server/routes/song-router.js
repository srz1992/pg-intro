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
        console.log('got something back:', result);
        res.send(result.rows)
        
    }).catch((error)=>{
        res.sendStatus(500);
        console.log('error getting all songs: '. err);
    })
});

router.post('/', (req, res) =>{
    console.log('In song-router post');
    const rank = req.body.rank;
    const artist = req.body.artist;
    const track = req.body.track;
    const published = req.body.published;
    const newSong = `INSERT INTO songs (artist, track, published, rank)
    VALUES ($1, $2, $3, $4)
    `
    console.log('newsong is:',newSong);
    
    pool.query(newSong, [artist, track, published, rank]).then((result)=>{
        console.log('back from the pool with:', newSong);
        res.sendStatus(201);
    }).catch((error)=>{
        console.log('error making new song:', error);
        
    })
});

router.put('/:id', (req, res) =>{
    console.log('In song-router put');
    const id = req.params.id;
    const rank = req.body.rank;
    const artist = req.body.artist;
    const track = req.body.track;
    const published = req.body.published;
    const queryText = `UPDATE songs SET rank=$2, artist=$3, track=$4, published=$5  WHERE id=$1`;
    pool.query(queryText, [id, rank, artist, track, published])
    .then((result)=>{
        console.log('successful update of song:', result);
        res.sendStatus(200);
    }).catch((error)=>{
        console.log('error updating song:', error);
        res.sendStatus(500);
    });
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
});

module.exports = router;

