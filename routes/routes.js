const express = require('express');
const router = express.Router();
const path = require('path');
const { db } = require('../models/Exercise');
const mongoose = require('mongoose');
const morgan = require('morgan');


//html routes
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

router.get('/exercise', (req, res) =>{
    res.sendFile('/Users/nicoledavenport/utcode/fitness_app/public/exercise.html');
})

router.get('/stats', (req,res) => {
    res.sendFile('/Users/nicoledavenport/utcode/fitness_app/public/stats.html');
})


//Grab workout data from API 

router.get('/api/workouts', (req,res) => {
    db.Workout.find({}, null, {sort: {day: 1} })
        .populate("exercises")
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

//Update workout data
router.put("/api/workouts/:id", (req,res) => {
    const workoutID = req.params.id;
    db.Exercise.create(req.body)
        .then(({_id}) =>
            db.Workout.findOneAndUpdate(
                {_id: workoutID},
                { $push: { exercises: _id}},
                { new: true}
            )
        )
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});



//Create new workout

router.post("/api/workouts/range", (req, res) => {
    db.Workout.create(req.body)
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });

});

//Route to populate workout dashboard

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}, null, { sort: {day: 1} })
    .populate((dbWorkout) => {
        res.json(err);
    });
});


applicationCache.get

module.exports = router;