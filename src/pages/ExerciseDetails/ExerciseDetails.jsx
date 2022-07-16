import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getExerciseDetails } from '../../services/workoutService'

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

  return ( 
    <>
      <h3>Workout Details</h3>
      <h3>Name: {exerciseDetail?.name}</h3>
      <h4>Type: {exerciseDetail?.type}</h4>
      <h5>Muscle: {exerciseDetail?.muscle}</h5>
      <h5>Equipment: {exerciseDetail?.equipment}</h5>
      <h5>Instructions: {exerciseDetail?.instructions}</h5>
    </>
  );
}

export default ExerciseDetails;