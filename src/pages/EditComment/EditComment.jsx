import * as profileService from '../../services/profileService'
import * as commentService from '../../services/commentService'
import { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const EditComment = (props) => {
  const [form, setForm] = useState(location.state.comment)
  const location = useLocation()
  // // const [validForm, setValidForm] = useState(false)
  // const formElement = useRef()

  // // useEffect(() => {
  // //   formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  // // }, [form])
  
  const handleChange = (evt) => {
    setForm({...form, [evt.target.name]:evt.target.value})
  }

  // const handleSubmit = async (evt) => {
  //   evt.preventDefault()
  //   // const updatedProfile = await commentService.create(form)
  //   // setProfile(updatedProfile)
  // }

  

  return ( 
    <>
    <h1>Testing</h1>
    <section>
                <div className="c-container">
                <h1>Comments</h1>
                <form id="algin-form">
                  <div class="form-group">
                    
                    <h4>Leave a comment</h4>  
                    <label for="message">Message</label>
                    <textarea type="text" name="comment" value={form.comment} id=""msg cols="30" rows="5" className="container" ></textarea>
                  </div>
                  <div className="procomments">
                    <Link to="/profiles">
                      <button type="submit" id="post" className="c-btn">Edit Comment</button>
                    </Link>
                  </div>
                </form>
              </div>
            </section>
    </>
  )
}

export default EditComment;