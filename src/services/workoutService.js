import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/workouts`

async function getAllWorkouts(search){
  const res = await fetch(`${BASE_URL}/muscle/${search}`, {
    method:'GET',
    headers:{ 
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json' 
  },body:search
  })
  return await res.json()

}
export{
  getAllWorkouts
}