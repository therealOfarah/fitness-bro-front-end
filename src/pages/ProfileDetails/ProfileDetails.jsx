import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as profileService from '../../services/profileService'
// import Workout from "../Workout/Workout"

const ProfileDetails = (props) => {

  const [profile, setProfile] = useState()
  const [workouts, setWorkouts] = useState([])
  const [meals, setMeals] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfileDetails(id)
      setProfile(profileData)
      setWorkouts(profileData.workouts)
    }
    fetchProfile()
  }, [id])
  console.log(profile)

  const handleDeleteWorkout = (id) => {
    setWorkouts(workouts.filter((workout) => workout._id !== id))
    }

    const handleDeleteMeal = (id) => {
      setMeals(meals.filter((meal) => meal._id !== id))
    }

    console.log(meals, 'here')
    console.log(workouts)

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
                  <p className="card-text">{workout.muscle}</p>
                  <button onClick={() => handleDeleteWorkout(workout._id)} type="button" className="btn btn-danger">Remove</button>
                </div>
              </div>
            </div>
            </>
            )} 
            {profile?.meals?.map(meal =>
            <>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{meal}</h5>
                  <h3>okay</h3>
                  <p className="card-text">{meal.name}</p>
                  <button onClick={() => handleDeleteMeal(profile.meals)} type="button" className="btn btn-danger">Remove</button>
                </div>
              </div>
            </div>
            </>
            )} 
        </div>
      </div>
    </>
  );
}

export default ProfileDetails