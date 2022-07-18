import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as profileService from '../../services/profileService'

const ProfileDetails = (props) => {

  const [profile, setProfile] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfileDetails(id)
      setProfile(profileData)
    }
    fetchProfile()
  }, [])
  
  const handleDelete = async (workout) =>{
    const deletedWorkout = await profileService.deleteWorkout(workout)
    setProfile(profile.filter((workouts) => workouts.id !== deletedWorkout.id))
    }


  return ( 
    <>
      <h1>Profile Details</h1>
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Name: {profile?.name}</h3>
          <h3>{profile?.email}</h3>
            {profile.workouts?.map(workout =>
            <>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{workout.name}</h5>
                  <p className="card-text">{workout.muscle}</p>
                  <button onClick={() => handleDelete(profile.workouts)} type="button" className="btn btn-danger">Remove</button>
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
                  <h5 className="card-title">{meal?.name}</h5>
                  <p className="card-text">{meal.calories}</p>
                  <p className="card-text">{meal.protein}</p>
                  <button onClick={() => handleDelete(profile.meals)} type="button" className="btn btn-danger">Remove</button>
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