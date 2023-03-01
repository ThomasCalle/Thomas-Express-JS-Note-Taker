const router = require('express').Router();
const fs = require ("fs");

// We could also use the path to write a realtive path in readFileSync
// Defines the get request to this routes end point '/api/notes' 
router.get('/api/notes', async (req, res) => {
const dbJson = await JSON.parse(fs.readFileSync("db/db.json","utf8"))
res.json(dbJson)
});

// Defines the post request to this routes end point '/api/notes'
router.post('/api/notes', (req, res) => {
const dbJson = JSON.parse(fs.readFileSync("db/db.json","utf8"))
dbJson.push(req.body)
fs.writeFileSync("db/db.json",JSON.stringify(dbJson));
res.json(dbJson)
});

module.exports = router; 


