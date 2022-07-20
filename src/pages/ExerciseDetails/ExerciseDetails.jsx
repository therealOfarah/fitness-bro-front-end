import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getExerciseDetails, addExerciseDetail, create } from '../../services/workoutService'
import '../../styles/exercise-details.css'

const ExerciseDetails = (props) => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [form, setForm] = useState({})

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

  const handleChange = (evt) => {
    setForm({...form, [evt.target.name]:evt.target.value})
  }

  // console.log(props.user.profile)
  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const updatedExerciseDetail = await create(form, props.user.profile)
    // console.log(updatedProfile)
    setExerciseDetail(updatedExerciseDetail)
  }
  return ( 
    <>
      <h1>Workout Details</h1>
      <div class="card">
        <div class="workout-body">
          <h3 class="card-title">Name: {exerciseDetail?.name}</h3>
          <h4>Type: {exerciseDetail?.type}</h4>
          <h5>Muscle: {exerciseDetail?.muscle}</h5>
          <h5>Equipment: {exerciseDetail?.equipment}</h5>
          <h5>Instructions: {exerciseDetail?.instructions}</h5>
          <button onClick={handleAdd} type="button" className="btn btn-success">Add</button>
        </div>
      </div>


<section>
      <div className="c-container">
      <h1>Comments</h1>
        {/* <div class="comment mt-4 text-justify float-left">
          <img src="https://i.imgur.com/yTFUilP.jpg" alt="" class="rounded-circle" width="40" height="40"/>
          <h4>Jhon Doe</h4>
          <span>- 20 October, 2018</span>
          <br/>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
        </div> */}
        {/* <div class="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4"> */}
          <form id="algin-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <h4 className="leavecom">Leave a comment</h4>
              <label for="message">Message</label>
              <textarea type="text" onChange={handleChange} name="comment" value={form.reviews} id=""msg cols="30" rows="5" className="container" ></textarea>
            </div>
            <div class="form-group">
              <button type="submit" id="post" className="c-btn">Post Comment</button>
            </div>
          </form>
        </div>
      </section>

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