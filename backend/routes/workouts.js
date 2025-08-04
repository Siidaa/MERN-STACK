import express from 'express'
import Workout from '../models/workoutModel.js'

const WorkoutRouter = express.Router();


WorkoutRouter.get('/', (req , res) => {
    res.json({mssg: 'GET all workouts'})
})

// GET a single workout
WorkoutRouter.get('/:id',(req, res) => {
    res.json({mssg: 'GET a single workout'})
})

// POST a new workout
WorkoutRouter.post('/', async (req, res) => {
    const {title, load, reps} = req.body

    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error: error.message})
    }

})

//DELETE  a workout
WorkoutRouter.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE workout'})
})

WorkoutRouter.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})


// module.exports = router
export default WorkoutRouter;