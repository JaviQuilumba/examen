const express = require('express');
const router = express.Router();

let users = [
    {
        id: 1,
        name: 'erick',
        lastname: 'Olalla'
    },
    {
        id: 2,
        name: 'jorge',
        lastname: 'dfs'
    },
    {
        id: 3,
        name: 'norman',
        lastname: 'dd'
    }
];

router.get('/users', (req, res) => {
    res.json(users);
});


module.exports = router;
