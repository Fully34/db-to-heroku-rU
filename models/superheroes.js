
//============================== requiremets ==============================//
        
var mongoose = require('mongoose');

//============================== schema ==============================//

//> Create the schema with mongoose
var SuperHeroSchema = mongoose.Schema({
    name        : String,
    superPowers : [ {type : String} ], //> enforce typing on an array
    cape        : String,
});

// create model and collection for superheroes
var SuperHeroes = mongoose.model('SuperHeroes', SuperHeroSchema); //> this makes the model.  first arg is collection name, second is the schema we want to use.

module.exports = SuperHeroes;