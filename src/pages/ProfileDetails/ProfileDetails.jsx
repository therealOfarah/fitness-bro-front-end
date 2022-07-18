import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as profileService from '../../services/profileService'
// import Workout from "../Workout/Workout"


const ProfileDetails = (props) => {

  const [profile, setProfile] = useState([])
  const [workouts, setWorkouts] = useState([])
  const [meals, setMeal] = useState([])
  
  const { id } = useParams()

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfileDetails(id)
      setProfile(profileData)
      setWorkouts(profileData.workouts)
      setMeal(profileData.meals)
    }
    fetchProfile()
  }, [id])
  console.log(profile)
  const handleDeleteWorkout = async (id) => {
    const deletedWorkout = await profileService.deleteWorkout(id)
    setWorkouts(workouts.filter((workout) => workout._id !== deletedWorkout))
    }

    const handleDeleteMeal = async(id) => {
      const deletedMeal = await profileService.deletedMeal(id)
      setMeal(meals.filter((meal) => meal._id !== deletedMeal))
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
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{workout.name}</h5>
                  <p className="card-text">Muscle: {workout.muscle}</p>
                  {props.user.profile === profile._id ? 
              <>
                <button onClick={() => handleDeleteWorkout(workout._id)} type="button" className="btn btn-danger">Remove</button>
              </>
              : ''
            }
                </div>
              </div>
            </div>
            </>
            )} 
            {meals?.map(meal =>
            <>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{meal.name}</h5>
                  <p className="card-text">Calories: {meal.calories}</p>
                  <p className="card-text">Protein: {meal.protein_g}g</p>
                  {props.user.profile === profile._id ? 
              <>
                <button onClick={() => handleDeleteMeal(meal._id)} type="button" className="btn btn-danger">Remove</button>
              </>
              : <p></p>
            }
                </div>
              </div>
            </div>
            </>
            )} 
              {props.user.profile === profile._id ?
            <>
            <p></p>
            </>
            :
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-5 col-md-6 col-12 pb-4">
                            <h1>Comments</h1>
                            <div class="comment mt-4 text-justify float-left">
                                <img src="https://i.imgur.com/yTFUilP.jpg" alt="" class="rounded-circle" width="40" height="40"/>
                                <h4>Jhon Doe</h4>
                                <span>- 20 October, 2018</span>
                                <br/>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                            </div>

                        <div class="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
                            <form id="algin-form">
                                <div class="form-group">
                                    <h4>Leave a comment</h4>
                                    <label for="message">Message</label>
                                    <textarea name="msg" id=""msg cols="30" rows="5" class="form-control" ></textarea>
                                </div>
                                <div class="form-group">
                                    <button type="button" id="post" class="btn">Post Comment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
              </div>

            </section>
            }
          {/* {profile?.workouts?.workout} */}
        </div>
      </div>
    </>
  );
}

export default ProfileDetails