const router = require('express').Router();
const Workout = require('../models/Workout');
const mongoose = require('mongoose');
const morgan = require('morgan');   



//Grab workout data from API 

router.get('/api/workouts', (req,res) => {
    Workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
});

//Update workout data
router.put("/api/workouts/:id", ({body, params}, res) => {
   Workout.findByIdAndUpdate
   (
       params.id,
       {$push: {exercies: body}}, {new: true, runValidators: true}
   )
   .then(dbWorkout => {
       res.json(dbWorkout);
   })
   .catch(err => {
       res.json(err);
   });
});



//Create new workout

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
});

//Route to populate workout dashboard

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).sort({'day': 1}).limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});



module.exports = router;