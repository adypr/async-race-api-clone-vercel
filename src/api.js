const express = require('express');
const serverless =require('serverless-http');

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.json({'dfgd': 'dfsdf'})
});

app.use('/', router);

module.exports.handler = serverless(app);