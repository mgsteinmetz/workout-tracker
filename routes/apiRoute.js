const router = require("express").Router();
const userWorkout = require("../models/userWorkouts");
const mongojs = require("mongojs");

router.get("/api/workouts", (req, res) => {
    userWorkout.find({})
        .populate("exercises")
        .exec(function (err, workouts) {
            if (err) {
                console.log(err);
            } else {
                res.json(workouts);
            }
        })
});

router.post("/api/workouts", ( { body }, res) => {
userWorkout.create(body)
    .then(dbuserWorkouts => {
        res.json(dbuserWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;