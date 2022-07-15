import { useState } from 'react'
import Search from '../../Search/Search'
import { workoutSearch } from '../../services/workoutService'


import Exercise from '../../components/Exercise/Exercise'

const Workout = props => {
  const[workouts,setWorkouts]= useState([])

  const handleWorkoutSearch = async FormData => {
    const workoutResults = await workoutSearch(FormData)
    setWorkouts(workoutResults)
  }


  return (
    <main >
      <h2>Workouts works</h2>
      <Search handleWorkoutSearch={handleWorkoutSearch}/>
      {workouts.map(workout => 
        <Exercise 
        key={workout.name}
        name={workout.name}
        muscle={workout.muscle}
        workout={workout}
        />
      )}
    </main>
  )
}
export default Workout