const express = require('express');
const router = express.Router();


// User model
const Users = require('../models/users');

// @route   POST /api/users/login
// @desc    Login
// @access  Public
router.post('/login', async (req, res) => {
    try {
        Users.findone({email:email},(err,user)=>{
            if(user) {
               if(password === user.password){
                   res.send({message:"login sucess",user:user})
               }else{
                   res.send({message:"wrong credentials"})
               }
            } else {
                res.send("not register")
            }
        })
    } catch(err) {
      res.status(400).send({ error: err });
    }
  
  });


// @route   POST /api/users/register
// @desc    Register
// @access  Public
router.post('/register', async (req, res) => {
    try {
        Users.findOne({email:req.body.email},(err,user)=>{
            if(user){
                res.send({message:"user already exist"})
            }else {
                const user = new Users.create({ name: req.body.name, email: req.body.email,  password: req.body.password });
                res.send({message:"sucessfull"})
            }
        })

    } catch(err) {
      res.status(400).send({ error: err });
    }
  
});



module.exports = router;