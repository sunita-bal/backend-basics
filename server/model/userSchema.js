const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    cpassword:{
        type:String,
        require:true
    },
    tokens:[
        {
            //as token generate many type so we use []
            token:{
                type:String,
                require:true
            }
        }
    ]
    

});

userSchema.pre('save', async function(next) {
    if(this.isModified('password')){
 
     this.password = await bcrypt.hash(this.password,12);
     this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
 
    next();
 });

 

const User = mongoose.model('USER', userSchema);

module.exports = User;