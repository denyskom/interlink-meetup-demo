const express = require('express');
const router = express.Router();

const restRouter = require('./rest-router');
const controllers = require('../controllers');

for (let path in controllers) {
    router.use(`/${path}`, restRouter(controllers[path]));
}

module.exports = router;