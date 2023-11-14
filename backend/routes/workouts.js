const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: "Get all Workouts" })
})

router.get('/:id', (req, res) => {
    res.json({ msg: "GET a single workout" })
})

router.post('/', (req, res) => {
    res.json({ msg: "POST a new Workout" })
})

router.delete('/:id', (req, res) => {
    res.json({ msg: "DELETE a workout" })
})

router.patch('/:id', (req, res) => {
    res.json({ msg: "PATCH a workout" })
})

module.exports = router;