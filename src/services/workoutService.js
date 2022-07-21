import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/workouts`


export async function getDetails(apiUrl) {
  const res = await fetch(`${BASE_URL}${apiUrl}`)
  return res.json()
}

export async function workoutSearch(formData){

  const res = await fetch(`${BASE_URL}?search=${formData.query}`)
  const data =  await res.json()
  return data
}

export async function getExerciseDetails(exerciseName) {
  const res = await fetch(`${BASE_URL}/search/${exerciseName}`)
  const data =  await res.json()
  return data
}

export async function addExerciseDetail(exerciseDetail) {
  const res = await fetch(`${BASE_URL}`, {
    method: 'POST', 
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`,
    'Content-Type': 'application/json'}, 
    body: JSON.stringify(exerciseDetail)
  })
  const data =  await res.json()
  return data
}

export async function create(form,profileId) {
  console.log(profileId)
  const res = await fetch(`${BASE_URL}/${profileId}/reviews`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'}, 
      body: JSON.stringify(form)
    })
  return res.json()
}