import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getExerciseDetails, addExerciseDetail } from '../../services/workoutService'
import '../../styles/exercise-details.css'

const ExerciseDetails = (props) => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const { exerciseName } = useParams()

  useEffect(() => {
    const fetchExerciseDetails = async () => {
      const exerciseData = await getExerciseDetails(exerciseName)
      setExerciseDetail(exerciseData[0])
    }
    fetchExerciseDetails()
  }, [exerciseName])

  function handleAdd(e) { 
    e.preventDefault()
    addExerciseDetail(exerciseDetail)
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