const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const recipe_id = req.body.recipe_id;

    const queryText = `SELECT * FROM "ingredients" WHERE "ingredients".recipe_id=$1;`;
    pool
        .query(queryText, [
            recipe_id,
    ])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;