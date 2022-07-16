import { useState } from "react"
import MealSearch from "../MealSearch/MealSearch"
import { mealSearch } from '../../services/mealService'


const Meals = props => {
  const[meals,setMeals]= useState([])

  const handleMealSearch = async FormData => {
    const mealResults = await mealSearch(FormData)
    setMeals(mealResults)
  }

  // console.log(meals)
  return (
    <>
    <main >
      <h2>Meals works</h2>
      <MealSearch handleMealSearch={handleMealSearch}/>
      {meals.map(meal =>
      <>
        <h3>Name:{meal?.name}</h3>
        <h3>Calories:{meal?.calories}g</h3>
        <h3>Carbohydrates:{meal?.carbohydrates_total_g}g</h3>
        <h3>Protein:{meal?.protein_g}g</h3>
        <h3>Fats:{meal?.fat_total_g}g</h3>
        <h3>Recomended Serviing Size:{meal?.serving_size_g}g</h3>
      </>
        )}
    </main>
    </>
  )
}


export default Meals