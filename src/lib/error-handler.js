const errorHandler = (err, req, res, next) => {
    switch (err.message) {
        case 'BAD_REQUEST':
            return res.sendStatus(400);
        case 'UNAUTHORIZED':
            return res.sendStatus(401);
        case 'NOT_FOUND':
            return res.sendStatus(404);
        default:
            console.error('\x1b[31m%s\x1b[0m', err);
            return res.sendStatus(500);
    }
};

module.exports = { errorHandler };
