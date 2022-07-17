import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as profileService from '../../services/profileService'
import Workout from "../Workout/Workout"

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
  console.log(profile.workouts)
  return ( 
    <>
      <h1>Profile Details</h1>
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Name: {profile?.name}</h3>
          <h3>{profile?.email}</h3>
          <h3>{profile?.workouts}</h3>
        </div>
      </div>
    </>
  );
}

export default ProfileDetails