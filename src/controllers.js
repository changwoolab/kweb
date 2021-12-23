const { Router } = require('express');
const { runQuery } = require('./lib/database');

const router = Router();

router.get('/express/:isExpress(\\d+)', async (req, res, next) => {
    
});

router.get('/:passengers(\\d+)', async (req, res, next) => {
    
});

module.exports = router;
