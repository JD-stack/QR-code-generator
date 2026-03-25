
const express = require('express');
const controller = require('./controller');

const router = express.Router();
router.post('/generate-qr', (req, res, next) => {
    console.log('POST /generate-qr route reached');
    next();
}, controller.generateQRCode);

router.get('/test', (req, res) => {
    res.send('Router is working');
});

module.exports = router;