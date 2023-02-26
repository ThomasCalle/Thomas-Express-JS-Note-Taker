const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
  // Your code
});

router.get ("*", (requires) =>{ 
    res.sendFile(path.join(__dirname, '../public/index.html'))
    });
    
module.exports = router;
