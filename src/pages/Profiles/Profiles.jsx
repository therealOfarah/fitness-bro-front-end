import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import './Profile.css'
import Profile from '../../components/Profile/Profile'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])
  
  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.length ? 
        <>
          <ul className='container'>
            {profiles.map(profile =>
              <div className='box' key={profile._id}>
                <Profile
                  key={profile._id}
                  name={profile.name}
                  email={profile.email}
                  workout={profile.workouts}
                  profile={profile}
                />
              </div>
            )}
          </ul>
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}

export default Profiles