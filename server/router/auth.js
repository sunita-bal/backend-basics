const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require('../model/userSchema');

// router.get('/', (req,res) => {
//     res.send('Hellow world from the server ');
// });

router.post('/signup', async (req,res) => {
    const { name, email, password, cpassword } = req.body ;

    if(!name|| !email|| !password|| !cpassword){
        return res.status(422).json({ error: "Missing required fields", status: 422 });
    }

    try{

        const userExist = await User.findOne({email:email});

        if(userExist){
          return res.status(422).json({ error: "email already exist", status: 422 });
  
         }
         else if(password != cpassword){
          return res.status(422).json({error: "password are not matching", status:422});
         }

         else{
            const user = new User({name,email,password,cpassword});
            console.log("nahi horha kya")

            await user.save();

            res.status(201).json({message: "user registered      successfully"});
            
         }

    }
    catch (err){
        console.log(err);

    }
});

router.post('/signin', async(req,res) => {

    const {email,password} = req.body;

    if(!email || !password){
        return res.send({status:400})
    }
    try{
        let token;
        const userLogin = await User.findOne({email:email});

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            
            // token = await userLogin.generateAuthToken();
            // console.log(token);

            if(!isMatch){
                return res.send({status:400})
             }
             else{
                res.status(201).json({message: "successfully login"});
             }  
        }
        else{
            return res.status(400).json({error: "Register new email Id"});
        }

        
    }
    catch (err){
        console.log(err);
    }
});



module.exports = router;