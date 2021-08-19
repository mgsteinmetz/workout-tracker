const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: {
        type: String,
        trim: true
    },
    duration: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const userWorkout = mongoose.model("userWorkout", workoutSchema);

module.exports = userWorkout;