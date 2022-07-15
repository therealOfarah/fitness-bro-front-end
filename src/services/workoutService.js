import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/workouts`

export async function workoutSearch(formData){
  const res = await fetch(`${BASE_URL}?muscle=${formData.query}`)
  return res.json()
}
