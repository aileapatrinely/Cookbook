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
        .then((response) => res.send(response.rows))
        .catch((error) => console.log('Error in ingredients GET', error));
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    const ingredient_name = req.body.ingredient_name;
    const amount = req.body.amount;
    const recipe_id = req.body.recipe_id;

    const queryText = `INSERT INTO "ingredients (ingredient_name, amount, recipe_id) VALUES ($1, $2, $3);`;
    pool
        .query(queryText, [
            ingredient_name,
            amount,
            recipe_id,
        ])
        .then(() => res.sendStatus(201))
        .catch(() => res.sendStatus(500));
});

router.put('/:id', (req,res) => {
    const ingredient_name = req.body.ingredient_name;
    const amount = req.body.amount;
    const id = req.params.id;

    const queryText = `UPDATE "ingredients" SET "ingredient_name"=$1, "amount"=$2 WHERE "id"=$3;`;
    pool
        .query(queryText, [
            ingredient_name,
            amount,
            id,
        ])
        .then(() => res.sendStatus(201))
        .catch(() => res.sendStatus(500));
});

router.delete('/:id', (req,res) =>{
    const id = req.params.id;
    
    const queryText = `DELETE FROM "ingredients" WHERE "ingredients".id=$1;`;
    pool
        .query(queryText, [id])
        .then(() => res.sendStatus(200))
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        });
});

module.exports = router;