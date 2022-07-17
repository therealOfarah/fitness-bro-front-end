import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as profileService from '../../services/profileService'

const ProfileDetails = (props) => {

  const [profile, setProfile] = useState([])
  const { id } = useParams()

  useEffect(() => {
    console.log(id)
    const fetchProfile = async () => {
      const profileData = await profileService.getProfileDetails(id)
      setProfile(profileData)
    }
    fetchProfile()
  }, [])

  return ( 
    <>
      <h1>Profile Details</h1>
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">Name: {profile?.name}</h3>
          <h3>{profile?.email}</h3>
          
        </div>
      </div>
    </>
  );
}

export default ProfileDetails