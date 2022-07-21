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
      <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-8">
          <div className="search">
            <div>
            <i className="fa fa-search"></i>
              <form onSubmit={handleSubmit}>
                <input 
                  name="query" 
                  type="text"  
                  autoComplete="off"
                  value={formData.query}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Search for Food"
                />
                <button className="btn btn-light" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}

export default MealSearch