import express from 'express'
import WorkoutRouter from './routes/workouts.js';
import dotenv from 'dotenv'
dotenv.config();

const app = express();
const port = process.env.PORT

app.use('/api/workout', WorkoutRouter);
app.use(express.json());

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})

app.listen(port, () => console.log(`Server connected ${port}`));