import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getExerciseDetails, addExerciseDetails } from '../../services/workoutService'
import '../../styles/exercise-details.css'

const ExerciseDetails = (props) => {
  const [exerciseDetails, setExerciseDetails] = useState({})
  const { exerciseName } = useParams()

  useEffect(() => {
    const fetchExerciseDetails = async () => {
      const exerciseData = await getExerciseDetails(exerciseName)
      setExerciseDetails(exerciseData)
    }
    fetchExerciseDetails()
  }, [exerciseName])

  
  const exerciseDetail = exerciseDetails[0]

  function handleAdd() {
    console.log('THIS WORKS') 
  }

  return ( 
    <>
      <h1>Workout Details</h1>
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Name: {exerciseDetail?.name}</h3>
          <h4>Type: {exerciseDetail?.type}</h4>
          <h5>Muscle: {exerciseDetail?.muscle}</h5>
          <h5>Equipment: {exerciseDetail?.equipment}</h5>
          <h5>Instructions: {exerciseDetail?.instructions}</h5>
          <button onClick={handleAdd} type="button" className="btn btn-success">Add</button>
        </div>
      </div>



      {/* if user adds workout, remove button 
      else, add button */} 
      {/* {props.user.profile._id === exerciseName ?
        <>
          <button type="button" className="btn btn-danger">Remove</button>
        </>
        :
        <>
        <button type="button" className="btn btn-success">Add</button>
        </>
      } */}
    </>
  );
}

export default ExerciseDetails;