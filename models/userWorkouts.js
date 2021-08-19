const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter a type of workout"
    },
    value: {
        type: Number,
        required: "Enter a duration"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const userWorkout = mongoose.model("userWorkout", workoutSchema);

module.exports = userWorkout;