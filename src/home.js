const express = require('express');
const router = express.Router();

const { response } = require('express');

router.get('/', (req, res, next) => {
    // res.sendFile('./index', { title: 'Express' });
    res.send("Hello world!", {title: 'Express' });
});

module.exports = router;