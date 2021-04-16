const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    const recipe_id = req.body.recipe_id;

    const queryText = `SELECT * FROM "instructions" WHERE "instructions".recipe_id=$1;`;
    pool
        .query(queryText, [
            recipe_id,
        ])
        .then((response) => res.send(response.rows))
        .catch((error) => console.log('Error in ingredients GET', error));
});


router.post('/', (req, res) => {

});

module.exports = router;