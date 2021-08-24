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

router.put("/api/workouts/:id", async (req, res) => {
    userWorkout.findOneAndUpdate(
        { _id: mongojs.ObjectId(req.params.id) },
        { duration: req.body.duration },
        { new: true }
    )
    .then(dbuserWorkouts => {
        res.json(dbuserWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    userWorkout.countDocument({}, function (err, range) {
        userWorkout.find({})
            .populate("exercises")
            .skip(range > 7 ? range - 7 : 0)
            .exec(function (err, workouts) {
                if(err) {
                    console.log(err);
                } else {
                    res.json(workouts)
                }
            })
    });
});

module.exports = router;