import { useState } from "react"

const MealSearch = (props) => {
  const [formData, setFormData] = useState({query: ''})

  const handleChange = evt => {
    setFormData({ ...formData,[evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleMealSearch(formData)
  }
  return (
    <>
    <div class="row height d-flex justify-content-center align-items-center">
      <div class="col-md-8">
        <div class="search">
          <div>
          <i class="fa fa-search"></i>
            <form onSubmit={handleSubmit}>
            <input 
            name="query" 
            type="text"  
            autoComplete="off"
            value={formData.query}
            onChange={handleChange}
            class="form-control"
            placeholder="Pick Something healthy"
            />
            <button class="btn btn-primary"type="submit">Search</button>
            </form>
            <div class="container">
            </div>
          </div>
          </div>
        </div>
    </div> 
    </>
  );
}

export default MealSearch