const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
//pk_test_dG91Y2hlZC1kaW5nby03Ni5jbGVyay5hY2NvdW50cy5kZXYk


router.post('create-or-update',async (req,res)=>{
    const{clerkId,firstName,lastName,email, image,sports,provider} = req.body;
    if(!clerkId || !firstName || !lastName || !email|| !image){
        return res.status(400).json({error:"Missing required fields"});
    }

    try{
            let user = await User.findOne({clerkId});

            if (user){
                user.firstName = firstName;
                user.lastName = lastName;
                user.image = image;
                user.sports = sports;
                await user.save();
            }else{
                user = await User.create({
                    clerkId,firstName,lastName,email,image,sports,provider
                })
            }
            res.status(200).json({succes :true, user});
    }catch(err){
        console.error("Error in creating or updating:", err);
        res.status(500).json({error:"Server error"});
    }
})