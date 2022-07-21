import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import * as profileService from '../../services/profileService'
import * as commentService from '../../services/commentService'

  const ProfileDetails = (props) => {

  const [profile, setProfile] = useState({})
  const [workouts, setWorkouts] = useState([])
  const [meals, setMeal] = useState([])
  const [form, setForm] = useState({})
  const [comments, setComments] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchProfile = async (evt) => {
      const profileData = await profileService.getProfileDetails(id)
      setProfile(profileData)
      setWorkouts(profileData.workouts)
      setMeal(profileData.meals)
      setComments(profileData.comments)
    }
    fetchProfile()
  }, [id])
  
  const handleChange = (evt) => {
    setForm({...form, [evt.target.name]:evt.target.value})
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const updatedProfile = await commentService.create(form, profile._id)
    setProfile(updatedProfile)
  }
  
  const handleDeleteWorkout = async (id) => {
    await profileService.deleteWorkout(id)
    setWorkouts(workouts.filter((workout) => workout._id !== id))
    }

  const handleDeleteMeal = async (id) => {
    await profileService.deletedMeal(id)
    setMeal(meals.filter((meal) => meal._id !== id))
  }

  const handleDeleteComment = async (id) => {
    const updatedProfile = await commentService.deleteComment(id, profile._id)
    setProfile(updatedProfile)
  }

  return ( 
    <>
      <h1>Profile Details</h1>
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Name: {profile?.name}</h3>
          <h3>{profile?.email}</h3>
            {workouts?.map(workout =>
            <>
              <div className="card" key={workout.name}>
                <div className="box-body">
                  <h5 className="card-title">{workout.name}</h5>
                  <p className="card-text">Muscle: {workout.muscle}</p>
                  {props.user.profile === profile._id ? 
                    <>
                      <button onClick={() => handleDeleteWorkout(workout._id)} type="button" className="btn-remove">Remove</button>
                    </>
                    : ''
                  }
                </div>
              </div>
            </>
            )} 
            {meals?.map(meal =>
            <>
              <div className="card" key={meal.name}>
                <div className="box-body">
                  <h5 className="card-title">{meal.name}</h5>
                  <p className="card-text">Calories: {meal.calories}</p>
                  <p className="card-text">Protein: {meal.protein_g}g</p>
                  {props.user.profile === profile._id ? 
                    <>
                      <button onClick={() => handleDeleteMeal(meal._id)} type="button" className="btn-remove">Remove</button>
                    </>
                    : <p></p>
                  }
                </div>
              </div>
            </>
            )} 
            {props.user.profile === profile._id ?
              <div class="form-group">
                {comments.map(comment => 
                  <div class='reviews' key={comment._id}>
                    <h4>{comment.author.name}</h4>
                    <p class='comment'>{comment.comment}</p>
                  </div>
                )}
              </div>
              :
              <section>
                <div className="c-container">
                  <h1>Comments</h1>
                  <form id="algin-form" onSubmit={handleSubmit}>
                    <div class="form-group">
                      {profile.comments?.map(comment => 
                        <div class='reviews' key={comment._id}>
                          <h4>{comment.author.name}</h4>
                          <p class='comment'>{comment.comment}</p>
                          {props.user.profile === comment.author._id ?
                            <> 
                              <Link to={`/profiles/${comment._id}/edit`} state={{profile}}>
                                <button type="submit" className="btn btn-danger">Edit</button>
                              </Link>
                              <button onClick={() => handleDeleteComment(comment._id)} type="button" className="btn btn-danger">Remove</button>
                            </>
                            :
                            ''
                          }
                        </div>
                      )}
                      <h4>Leave a comment</h4>  
                      <label for="message">Message</label>
                      <textarea type="text" onChange={handleChange} name="comment" value={form.comment} id=""msg cols="30" rows="5" className="container" ></textarea>
                    </div>
                    <div className="procomments">
                      <button type="submit" id="post" className="c-btn">Post Comment</button>
                    </div>
                  </form>
                </div>
              </section>
            }
        </div>
      </div>
    </>
  );
}

export default ProfileDetails