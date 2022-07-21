import { useState } from "react"
import MealSearch from "../MealSearch/MealSearch"
import { mealSearch, addMealDetail } from '../../services/mealService'
import { Link } from "react-router-dom"
import '../../styles/meals.css'

  const Meals = props => {
  const[meals,setMeals]= useState([])

  const handleMealSearch = async FormData => {
    const mealResults = await mealSearch(FormData)
    setMeals(mealResults)
  }
  function handleAdd(e) { 
    e.preventDefault()
    addMealDetail(meals)
  }
  return (
    <>
    <main className="meal-page">
      <h2>Meals</h2>
      <MealSearch handleMealSearch={handleMealSearch}/>
        {meals.map(meal =>
          <>
            <div class="card" style={{width: "18rem"}}>
              <div class="card-body">
                <h1 class="card-title">{meal?.name}</h1>
                  <h3>Calories:{meal?.calories}g</h3>
                  <h3>Carbohydrates:{meal?.carbohydrates_total_g}g</h3>
                  <h3>Protein:{meal?.protein_g}g</h3>
                  <h3>Fats:{meal?.fat_total_g}g</h3>
                  <h3>Recomended Serviing Size:{meal?.serving_size_g}g</h3>
                <button onClick={handleAdd}class="btn">Add</button>
              </div>
            </div>
          </>
        )}
    </main>
    </>
  )
}


export default Meals