const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "recipe" WHERE "recipe".user_id = $1;`;
    pool
        .query(queryText, [req.user.id])
        .then ((response) => res.send(response.rows))
        .catch((error) => console.log('Error in recipe GET route', error));
});


router.post('/', (req, res) => {
    const recipe_name = req.body.recipe_name;
    const user_id = req.body.user_id;

    const queryText = `INSERT INTO "recipe" (recipe_name, user_id) VALUES ($1, $2);`;
    pool
        .query(queryText, [
            recipe_name,
            user_id,
    ])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

router.put('/:id',(req, res) => {
    const recipe_name = req.body.recipe_name;
    const user_id = req.body.user_id;
    
    const queryText = `UPDATE "recipe" SET "recipe_name"=$1 WHERE "user_id"=$2;`;
    pool
        .query(queryText, [recipe_name])
        .then(() => res.sendStatus(201))
        .catch(() => res.sendStatus(500));
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    
    const queryText = `DELETE FROM "recipe" WHERE "recipe".id=$1;`;
    pool
        .query(queryText, [id])
        .then(() => res.sendStatus(200))
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

module.exports = router;