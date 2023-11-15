const Workout = require('../models/workoutModel')

//get all workouts
const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({ createdAt: -1 });
        res.status(200).json(workouts);
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
};


//get one workout
const getWorkout = async (req, res) => {
    const { id } = req.params;
    try {
        const workout = await Workout.findById(id);
        res.status(200).json(workout);
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
}

//create a workout

const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;
    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(201).json(workout);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

//delete a workout


//update a workout

module.exports = {
    createWorkout, getWorkouts, getWorkout
}