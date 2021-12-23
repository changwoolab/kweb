const { Router } = require('express');
const { runQuery } = require('./lib/database');

const router = Router();

router.get('/express/:isExpress(\\d+)', async (req, res, next) => {
    try {
        const express = req.params.isExpress;
        if (express == 1) {
            const sql = `select name from stations where isExpress = 1`;
            const results = await runQuery(sql, []);
            return results;
        } else if (express == 0) {
            const sql = `select name from stations where isExpress = 0`;
            const results = await runQuery(sql, []);
            return results;
        } else {
            throw new Error('BAD_REQUEST');
        }
    } catch (err) {
        return next(err);
    }
});

router.get('/:passengers(\\d+)', async (req, res, next) => {
    try {
        const pass = req.params.passengers;
        const sql = `select name from stations where passengers > ${pass}`;
        const results = await runQuery(sql, []);
        return results;
    } catch(err) {
        return next(err);
    }
});

module.exports = router;
