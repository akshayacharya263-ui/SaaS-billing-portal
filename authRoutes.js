
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

router.post('/register', async(req,res)=>{
    const {name,email,password,role} = req.body;

    const hash = await bcrypt.hash(password,10);

    const user = new User({
        name,
        email,
        password:hash,
        role
    });

    await user.save();

    res.json({msg:'User Registered'});
});

router.post('/login', async(req,res)=>{
    const {email,password} = req.body;

    const user = await User.findOne({email});

    if(!user){
        return res.status(400).json({msg:'User not found'});
    }

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch){
        return res.status(400).json({msg:'Wrong password'});
    }

    const token = jwt.sign(
        {
            id:user._id,
            role:user.role
        },
        process.env.JWT_SECRET
    );

    res.json({
        token,
        role:user.role
    });
});

module.exports = router;
