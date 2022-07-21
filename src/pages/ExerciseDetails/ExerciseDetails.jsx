import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getExerciseDetails, addExerciseDetail } from '../../services/workoutService'
import '../../styles/exercise-details.css'

const ExerciseDetails = () => {
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
      <div className="card">
        <div className="workout-body">
          <h3 className="card-title">Name: {exerciseDetail?.name}</h3>
          <h4>Type: {exerciseDetail?.type}</h4>
          <h5>Muscle: {exerciseDetail?.muscle}</h5>
          <h5>Equipment: {exerciseDetail?.equipment}</h5>
          <h5>Instructions: {exerciseDetail?.instructions}</h5>
          <button onClick={handleAdd} type="button" className="btn">Add</button>
        </div>
      </div>
    </>
  );
}

export default ExerciseDetails;