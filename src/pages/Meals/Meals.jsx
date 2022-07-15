import { useState } from "react"
import Search from "../../Search/Search"
import { mealsSearch } from '../../services/mealService'


const Meals = props => {
  const[meals,setMeals]= useState([])

  const handleMealSearch = async FormData => {
    const mealResults = await mealsSearch(FormData)
    setMeals(mealResults)
  }

  console.log(meals)
  return (
    <main >
      <h2>Meals works</h2>
      <Search handleMealSearch={handleMealSearch}/>
    </main>
  )
}


export default Meals