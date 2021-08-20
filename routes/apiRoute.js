const router = require("express").Router();
const userWorkout = require("../models/userWorkouts");
const mongojs = require("mongojs");
const { db } = require("../models/userWorkouts");

router.get("/api/workouts", (req, res) => {
    db.agggregate( {
        $addFields: {
            duration: {
                $sum: "$exercises.duration"
            }
        }
    })
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

module.exports = router;