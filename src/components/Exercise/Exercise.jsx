import { Link } from 'react-router-dom'
import '../../styles/exercise.css'

const Exercise = (props) => {
  return ( 
    <>
      <div className='workout-list'>
        <Link to={`/workouts/${props.workout.name}`} workout={props.workout} className="workout-name">{props.workout.name}</Link>
      </div>
    </>
  );
}

export default Exercise;