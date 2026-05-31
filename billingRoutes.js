
const express = require('express');
const router = express.Router();

const Invoice = require('../models/Invoice');
const auth = require('../middleware/auth');

router.get('/', auth, async(req,res)=>{
    const invoices = await Invoice.find();
    res.json(invoices);
});

router.post('/', auth, async(req,res)=>{
    if(req.user.role !== 'admin'){
        return res.status(403).json({msg:'Access denied'});
    }

    const invoice = new Invoice(req.body);
    await invoice.save();

    res.json(invoice);
});

module.exports = router;
