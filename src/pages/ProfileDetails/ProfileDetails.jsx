import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as profileService from '../../services/profileService'
// import Workout from "../Workout/Workout"

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
  // console.log(profile)
  const handleDelete = (workout)=>{
    // console.log(profile.workouts)
      setProfile(profile.filter((workouts) => workouts.id !== workout.id))
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
          {/* {profile?.workouts?.workout} */}
        </div>
      </div>
    </>
  );
}

export default ProfileDetails