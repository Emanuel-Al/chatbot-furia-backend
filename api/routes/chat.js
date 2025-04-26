const express = require('express');
const router = express.Router();

router.post('/', (req,res) => {
    const {message} = req.body;
    res.json({reply: message});
});

module.exports = router;