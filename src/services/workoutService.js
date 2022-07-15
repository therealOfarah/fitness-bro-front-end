import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/workouts`

async function getAllWorkouts(muscle){
  const res = await fetch(`${BASE_URL}/${muscle}`, {
    method:'GET',
    headers:{ 
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json' 
  },body:muscle
  })
  return await res.json()

}
export{
  getAllWorkouts
}