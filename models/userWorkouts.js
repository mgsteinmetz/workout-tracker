const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: 'Enter type of exercise'
            },
            duration: {
                type: Number,
                trim: true,
                required: 'Enter duration of exercise'
            },
            name: {
                type: String,
                trim: true,
                required: 'Enter name of exercise'
            },
            date: {
                type: Date,
                default: Date.now
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            }
        }
    ]
});

const userWorkout = mongoose.model("userWorkout", workoutSchema);

module.exports = userWorkout;