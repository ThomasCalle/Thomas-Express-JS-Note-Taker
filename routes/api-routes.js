// const router = require('express').Router();
// const { v4: uuidv4 } = require('uuid');
// const fs = require ("fs");
// // import V4

//  // If all the required properties are present
//  if ( &&  && delete) {
//   // Variable for the object we will save
//   const newFeedback = {
//     ,
//     ,
//     ,
//     feedback_id: uuidv4(),
//   };
//  }

// // We could also use the path to write a realtive path in readFileSync
// // Defines the get request to this routes end point '/api/notes' 
// router.get('/api/notes', async (req, res) => {

// const dbJson = await JSON.parse(fs.readFileSync("db/db.json","utf8"))
// res.json(dbJson)
// });

// // Defines the post request to this routes end point '/api/notes'
// router.post('/api/notes', (req, res) => {
// const dbJson = JSON.parse(fs.readFileSync("db/db.json","utf8"))
// // create new object, take in req bod title, and req.bod text and give it an id with the V4
// // Remeber to still push just with the new vaariables
// dbJson.push(req.body)
// fs.writeFileSync("db/db.json",JSON.stringify(dbJson));
// res.json(dbJson)
// });

// // fix this API DELETE request
// router.delete("/notes/:id" , (req, res) => {
//     let data = fs.readFileSync("./app/data/db.json", "utf8")
//     const dataJSON =  JSON.parse(data);
//     const newNotes = dataJSON.filter((note) => { 
//         return note.id !== req.params.id;
//         });
//     fs.writeFileSync("db/db.json",JSON.stringify(newNotes));
//     res.json("Note deleted.");
//   });
  
// module.exports = router; 



// // EDIT

// const router = require('express').Router();
// const { v4: uuidv4 } = require('uuid');
// const fs = require ("fs");

// // Defines the get request to this routes end point '/api/notes'
// router.get('/api/notes', async (req, res) => {
//   const dbJson = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
//   res.json(dbJson);
// });

// // Defines the post request to this routes end point '/api/notes'
// router.post('/api/notes', (req, res) => {
//   const dbJson = JSON.parse(fs.readFileSync("db/db.json","utf8"));
//   const newFeedback = {
//     title: req.body.title,
//     text: req.body.text,
//     id: uuidv4(),
//   };
//   dbJson.push(newFeedback);
//   fs.writeFileSync("db/db.json",JSON.stringify(dbJson));
//   res.json(dbJson);
// });

// // Defines the delete request to this routes end point '/api/notes/:id'
// router.delete('/api/notes/:id', (req, res) => {
//   let data = fs.readFileSync("db/db.json", "utf8");
//   const dataJSON =  JSON.parse(data);
//   const newNotes = dataJSON.filter((note) => { 
//     return note.id !== req.params.id;
//   });
//   fs.writeFileSync("db/db.json",JSON.stringify(newNotes));
//   res.json("Note deleted.");
// });

// module.exports = router; 

//UPDATE
// UOPDATE
// UPDATE



const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ("fs");

// Defines the get request to this routes end point '/api/notes'
router.get('/api/notes', async (req, res) => {
  const dbJson = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
  res.json(dbJson);
});

// Defines the post request to this routes end point '/api/notes'
router.post('/api/notes', (req, res) => {
  const dbJson = JSON.parse(fs.readFileSync("db/db.json","utf8"));
  const newFeedback = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  dbJson.push(newFeedback);
  fs.writeFileSync("db/db.json",JSON.stringify(dbJson));
  res.json(dbJson);
});

// Defines the delete request to this routes end point '/api/notes/:id'
router.delete('/api/notes/:id', (req, res) => {
  let data = fs.readFileSync("db/db.json", "utf8");
  const dataJSON =  JSON.parse(data);
  const newNotes = dataJSON.filter((note) => { 
    return note.id !== req.params.id;
  });
  fs.writeFileSync("db/db.json",JSON.stringify(newNotes));
  res.json("Note deleted.");
});

module.exports = router; 



