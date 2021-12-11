// const express = require('express');
// const router = express.Router();
// var fetchuser = require('../middleware/fetchuser')
// const Note = require('../models/Notes')
// const { body, validationResult } = require('express-validator')


// //Route 1 : Get all the notes using : GET : "/api/notes/fetchuser" . Login Required.

// router.get('/fetchallnotes', fetchuser, async (req, res) => {

//     try {
//         const notes = await Note.find({ user: req.user.id }) //fetch all the notes of the user with this id

//         res.json(notes)

//     } catch (error){
//         console.error(error.message);
//         res.status(500).send('Interal Server Error');
//     }
// })

// //Route 2 : Add a new note using : POST "/api/notes/addnote" . Login Required.

// router.post('/addnote', fetchuser, [

//     body('title', 'Enter a valid title').isLength({ min: 3 }),

//     body('description', 'descrition must be atleast 5 characters').isLength({ min: 5 })

// ], async (req, res) => {

//     try {

//         const { title,description,tag} = req.body;

//         const errors = validationResult(req);
      
//         if (!errors.isEmpty()) {

//             return res.status(400).json({ errors: errors.array() })
//         }

//         const note = new Note({
//             title, description, tag, user: req.user.id
//         })
 

//         const savedNote = await note.save()

       
//         res.json(savedNote)
//         // res.send(savedNote)

//     } catch (error){
//         console.error(error.message);
//         res.status(500).send('Interal Server Error');
//     }
// })

// //Route 3 : Updating an existing note using : PUT "/api/notes/updatenote/:id" . Login Required.

// // id we paste from previously  created notes
// //fetchuser is used everywhere to keep track of the currently logged in user

// //Which ever id we put we get it 
// router.put('/updatenote/:id', fetchuser, async (req, res) => {

//     const {title,description,tag} = req.body;

//     try {
        
    
//     const newNote = {};
//     if(title){newNote.title = title};
//     if(description){newNote.description = description};

//     if(tag){newNote.tag = tag};

//     //Find the Note to be updated and update it

//     let note = await Note.findById(req.params.id);
//     if(!note) { return res.status(404).send("Not Found") }

//     //check if notes user id is same as the user id currently logged in

//     if(note.user.toString() !== req.user.id ){
//         return res.status(401).send("Not allowed")
//     }

//     note = await Note.findByIdAndUpdate( req.params.id , {$set : newNote},{ new:true})

//     res.json({note});} catch (error) {
//         console.error(error.message);
//         res.status(500).send('Interal Server Error');
//     }




// })

// //Route 4 : Deleting an existing note using : POST "/api/notes/deletenote" . Login Required.

// router.delete('/deletenote/:id', fetchuser, async (req, res) => {

//     const {title,description,tag} = req.body;

//     try {
        
    
//     const newNote = {};
//     if(title){newNote.title = title};
//     if(description){newNote.description = description};

//     if(tag){newNote.tag = tag};

//     //Find the Note to be deleted and delete it

//     let note = await Note.findById(req.params.id);
//     if(!note) { return res.status(404).send("Not Found") }

//     //check if notes user id is same as the user id currently logged in

//     //allow deletion only if user owns this note
//     if(note.user.toString() !== req.user.id ){
//         return res.status(401).send("Not allowed")
//     }

//     note = await Note.findByIdAndDelete( req.params.id )

//     res.json({"Success" :" Note has been deleted" , note : note});}catch(error){
//         console.error(error.message);
//         res.status(500).send('Interal Server Error');
//     }

// })


// module.exports = router
const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Notes');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the Notes using: GET "/api/notes/getuser". Login required
router.get('/fetchallnotes',  async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post('/addnote',  [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {
        try {
            const { title, description, tag } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({
                title, description, tag
            })
            // res.json(note)
            const savedNote = await note.save()

            res.json(savedNote)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

// // ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required
// router.put('/updatenote/:id', fetchuser, async (req, res) => {
//     const { title, description, tag } = req.body;
//     try {
//         // Create a newNote object
//         const newNote = {};
//         if (title) { newNote.title = title };
//         if (description) { newNote.description = description };
//         if (tag) { newNote.tag = tag };

//         // Find the note to be updated and update it
//         let note = await Note.findById(req.params.id);
//         if (!note) { return res.status(404).send("Not Found") }

//         if (note.user.toString() !== req.user.id) {
//             return res.status(401).send("Not Allowed");
//         }
//         note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
//         res.json({ note });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal Server Error");
//     }
// })

// // ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
// router.delete('/deletenote/:id', fetchuser, async (req, res) => {
//     try {
//         // Find the note to be delete and delete it
//         let note = await Note.findById(req.params.id);
//         if (!note) { return res.status(404).send("Not Found") }

//         // Allow deletion only if user owns this Note
//         if (note.user.toString() !== req.user.id) {
//             return res.status(401).send("Not Allowed");
//         }

//         note = await Note.findByIdAndDelete(req.params.id)
//         res.json({ "Success": "Note has been deleted", note: note });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal Server Error");
//     }
// })
module.exports = router