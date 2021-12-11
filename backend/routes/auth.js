// const express = require('express');
// const User = require('../models/User');
// const router = express.Router();
// const {body, validationResult} = require('express-validator'); //for validating the input 
// const bcrypt = require('bcryptjs');
// const cors = require('cors')
// //jsonwebtoken is a way to identify user so that user doesn't have to verify itself all the time
// //from the token given to the user jwt verifies it is the same user

// //await is used for asynchronous functions and promise

// var fetchuser = require('../middleware/fetchuser');
// var jwt = require('jsonwebtoken');
// const app = express()
// app.use((req,res,next)=>{
//     res.header("Access-Control-Allow-Origin","*");
  
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin,X-Requested-With,Content-Type,Accept,Authorisation"
//     );
//     if(req.method === 'OPTIONS'){
//       res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE');
//     }
//   })

  
// // app.use(cors());

// const JWT_SECRET = 'Harryisagoodb$oy';

// //ROUTE 1 - Create  a User using : POST "/api/auth/" . No login requried here

// router.post('/createuser' ,[
//     body('name' ,'Enter a valid name').isLength({ min: 3}),

//     body('email','Enter a valid email').isEmail(), //second paramaeter will be sent for this error

//     body('password','Password must be atleast 5 characters').isLength({ min: 5 })
// ], async (req,res)=>{

//     //if there is an error request Bad request and the errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     } 

//     try{
//         //Check wheter the user with same email exist already
//     let user = await User.findOne({email: req.body.email})

//     if(user){ //is the email is already registered we return here itself

//         return res.status(400).json({error : "Sorry a user with that email already exists"})
//     }

// //using await we wait until the current promise is resolved otherwise program moves ahead meanwhile

//     const salt = await bcrypt.genSalt(10); //generates a salt

//     const secPass = await bcrypt.hash(req.body.password,salt); //await as it returns a promise


//     user = await User.create({
//         name : req.body.name,
//         password : secPass,
//         email : req.body.email,
//     });
    
//     // .then(user => res.json(user))
//     // .catch( err=> console.log(err));

//     // res.json({error : 'Please Enter a unique value for email',message : err.message})
//     // res.send(req.body);

//     const data = {
//         user : {
//             id : user.id    
//         }
//     }
//     const authtoken = jwt.sign(data,JWT_SECRET);
    
//     res.json(authtoken);


//     }
//     catch(error){
//         console.error(error.message);
//         res.status(500).send('Interal Server Error');
//     }
    
// })


// //ROUTE 2 -Authenticaiton of the user using POST "/api/auth/login" , No login required

// router.post('/login' ,[
    

//     body('email','Enter a valid email').isEmail(),
//      body('password','Password must not be blank').exists()
// ], async (req,res)=>{

//     // res.header("Access-Control-Allow-Origin","*");
//     //if there are errors return bad request and the errors
//     const errors = validationResult(req);
//     if(!errors.isEmpty()) {
//         return res.status(400).json({errors : errors.array()});
//     }

// const {email , password} = req.body;
//     console.log("Backend is working");
//   let success = false 

// //Put await for all asynchronous funcitons

// try{
//     let user = await User.findOne({email});
//     if(!user){
//         return res.status(400).json({error : "Please try to login with correct credentials"})
//     }

//     //match password entered by the user to the user's password in database
//     const passwordCompare = await bcrypt.compare(password,user.password);

//     if(!passwordCompare){
//         return res.status(400).json({success ,error : "Please login with correct credentials"});
//     }

//     const data = {

//         user : {
//             id : user.id
//         }
//     }

//     const authtoken = jwt.sign(data,JWT_SECRET);
//     success = true;
//     res.json({success,authtoken})


// }catch(error){

//     console.error(error.message);
//     res.status(500).send("Internal Server Error ");

// }


// })

// //ROUTE 3 : Get logged in user details using  : POST "api/auth/getuser". Login requried
// router.post('/getuser' , fetchuser , async (req,res)=>{
//     //fetchuser fetches data with the help of middleware
// try {
//     userId = req.user.id;
//     const user = await User.findById(userId).select("-password") //select all fields except password

//     res.send(user)
// } catch(error){

//     console.error(error.message);
//     res.status(500).send("Internal Server Error ");

// }
// })

// module.exports = router;


const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'Harryisagoodb$oy';

// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // Check whether the user with this email exists already
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exists" })
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,  
    });
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);


    // res.json(user)
    res.json({ authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})


// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


});


// // ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
// router.post('/getuser', fetchuser,  async (req, res) => {

//   try {
//     userId = req.user.id;
//     const user = await User.findById(userId).select("-password")
//     res.send(user)
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// })

module.exports = router;