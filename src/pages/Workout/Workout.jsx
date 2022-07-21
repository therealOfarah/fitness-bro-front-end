import { useState } from 'react'
import Search from '../../Search/Search'
import { workoutSearch } from '../../services/workoutService'
import '../../styles/workout.css'

import Exercise from '../../components/Exercise/Exercise'

const Workout = props => {
  const[workouts,setWorkouts]= useState([])

  const handleWorkoutSearch = async FormData => {
    const workoutResults = await workoutSearch(FormData)
    setWorkouts(workoutResults)
  }


  return (
    <body className='workout-page'>
      <h2>Workouts</h2>
        <Search handleWorkoutSearch={handleWorkoutSearch}/>
          <div className='.workoutcontainer'>
            {workouts.map(workout => 
              <div className='workoutcard' key={workout.name}>
                <Exercise 
                  key={workout.name}
                  name={workout.name}
                  muscle={workout.muscle}
                  workout={workout}
                />
              </div>
            )}
          </div>
    </body>
  )
}
export default Workout