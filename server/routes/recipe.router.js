const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "recipe" WHERE "recipe".user_id = $1;`;
    pool
        .query(queryText, [req.user.id])
        .then ((response) => res.send(response.rows))
        .catch((error) => console.log('Error in recipe GET route', error));
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;