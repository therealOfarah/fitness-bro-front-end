import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

import Profile from '../../components/Profile/Profile'
import Workout from '../Workout/Workout'

const Profiles = (props) => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  console.log(profiles)

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.length ? 
        <>
          {profiles.map(profile =>
            <Profile 
              key={profile._id}
              name={profile.name}
              email={profile.email}
              workout={profile.workouts}
              profile={profile}
            />
          )}
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles