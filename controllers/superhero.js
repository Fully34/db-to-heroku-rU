
//============================== requirements ==============================//

var SuperHeroes = require('../models/superheroes.js');
//> gives us access to the collection in the db

//============================== controller ==============================//

var superHeroController = {

    // get super heroes from the db
    getHeroes : function(req, res){

        // this is equivalent to db.SuperHeroes.find() from mongo shell
            // > SuperHeroes is shorthand b/c of how we named/exported in superheroes.js model file
        SuperHeroes.find({}, function(err, heroes) {

            if (err) {

                res.send({err : err}); //> err is an object

            } else {

                res.send({data : heroes}); //> heroes will be an array
                // console.log(heroes)
            };
        });
    },

    //add new super hero to the db
    createHero : function(req, res){

        var hero = new SuperHeroes(req.body); 
        //> req.body props are going to match the Schema props
        //> the object that gets passed into our model MUST match the Schema in terms of properties
        //> if they don't match, they will be ignored


        hero.save(function(err, doc) {

            res.send({data : doc});
        });
        //> save the new doc obj we created above
    },

};

module.exports = superHeroController;