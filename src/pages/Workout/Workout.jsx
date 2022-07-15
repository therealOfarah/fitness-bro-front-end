import { useState, useEffect } from 'react'
import * as workoutService from '../../services/workoutService'


const Workout = props => {
  const[workouts,setWorkouts]= useState([])

  useEffect(() => {
    const fetchWorkouts = async () => {
      const workoutData = await workoutService.getAllWorkouts()
      setWorkouts(workoutData)
    }
    fetchWorkouts()
  }, [])
  console.log(workouts)
  return (
    <main >
      <h2>Workouts works</h2>
    </main>
  )
}

export default Workout