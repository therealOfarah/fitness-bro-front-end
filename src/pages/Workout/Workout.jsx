import { useState } from 'react'
import Search from '../../Search/Search'
import { workoutSearch } from '../../services/workoutService'


const Workout = props => {
  const[workouts,setWorkouts]= useState([])

  const handleWorkoutSearch = async FormData => {
    const workoutResults = await workoutSearch(FormData)
    setWorkouts(workoutResults)
  }

  console.log(workouts)
  return (
    <main >
      <h2>Workouts works</h2>
      <Search handleWorkoutSearch={handleWorkoutSearch}/>
    </main>
  )
}

export default Workout