// pool of connections to our database

const pg = require('pg');
const Pool = pg.Pool;

const DATABASE_NAME = 'music_library';
const config = {
    database: DATABASE_NAME, // the name of the db to connect to
    host: 'localhost', // where the db is located
    port: 5432, // the port the db is listening on 
    max: 10, // max number of connections
    idleTimeoutMillis: 30000 // 30 seconds to connect
}

// make the db connection pool
const pool = new Pool(config);

// log that we have a successfully connected
pool.on('connect', (client) =>{
    console.log('connected to database:', DATABASE_NAME);
});

// handle error for clients that have been waiting for too long
pool.on('error', (err, client) =>{
    console.log('error connecting to database from client:', client, '. error:', err);
    process.exit(-1)
    
});

module.exports = pool;