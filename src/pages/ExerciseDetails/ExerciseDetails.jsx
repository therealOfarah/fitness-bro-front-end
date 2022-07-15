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

  return ( 
    console.log(props.workout)
  );
}

export default ExerciseDetails;