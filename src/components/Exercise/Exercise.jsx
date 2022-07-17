import ExerciseDetails from '../../pages/ExerciseDetails/ExerciseDetails';
import { Link } from 'react-router-dom'
import '../../styles/exercise.css'

const Exercise = (props) => {
  return ( 
    <>
    <ul className='workout-list'>
    <Link to={`/workouts/${props.workout.name}`} workout={props.workout} className="workout-name">{props.workout.name}</Link>
    </ul>
    </>
  );
}

export default Exercise;