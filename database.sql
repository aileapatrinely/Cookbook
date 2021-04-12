
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "recipe" (
	"id" SERIAL PRIMARY KEY,
	"recipe_name" VARCHAR (100) UNIQUE NOT NULL,
	"user_id" INT REFERENCES "user" ON DELETE CASCADE
	);
	
CREATE TABLE "ingredients" (
	"id" SERIAL PRIMARY KEY,
	"ingredient_name" VARCHAR (100) NOT NULL,
	"amount" VARCHAR (80) NOT NULL,
	"recipe_id" INT REFERENCES "recipe" ON DELETE CASCADE
	);
	
CREATE TABLE "instructions" (
	"id" SERIAL PRIMARY KEY,
	"instructions" VARCHAR (1000) NOT NULL,
	"recipe_id" INT REFERENCES "recipe" ON DELETE CASCADE
	);