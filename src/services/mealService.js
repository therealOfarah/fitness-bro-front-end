import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/meals`
console.log(process.env.REACT_APP_BACK_END_SERVER_URL)

export async function mealsSearch(formData){
  const res = await fetch(`http://localhost:3001/api/meals?search=${formData.query}`)
  const data =  await res.json()
  console.log(data)
  return data
}