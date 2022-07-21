import * as profileService from '../../services/profileService'
import * as commentService from '../../services/commentService'
import { useEffect, useState, useRef } from 'react'
import { Link, useLocation, useParams, useNavigate} from 'react-router-dom'

const EditComment = (props) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const location = useLocation()

  const [formData, setFormData] = useState({
    comment:''
  })
  // const [formData, setFormData] = useState(location.state.comment)

  // function handleSubmit(evt) {
  //   evt.preventDefault()
  //   // props.handleUpdate(comment)
  // }

  // const handleChange = evt => {
	// 	setFormData({ ...formData, [evt.target.name]: evt.target.value })
  // }

  useEffect(() => {
    const fetchComment = async (commentId) => {
      const viewComment = await commentService.show(commentId)
      setFormData(viewComment)
    }
    fetchComment(id)
  }, [id])
  
  const handleUpdate = async (e) => {
      e.preventDefault()
      await commentService.update(formData)
      navigate(`/profiles/${location.state.profile._id}`)
    }
  return ( 
    <>
    <h1>Testing</h1>
    <section>
      <div className="c-container">
      <h1>Comments</h1>
      <form id="algin-form"  onSubmit={handleUpdate}>
        <div class="form-group">
          <h4>Leave a comment</h4>  
          <label for="message">Message</label>
          <textarea type="text" name="comment" value={formData.comment} id=""msg cols="30" rows="5" className="container" onChange={(e) => setFormData({...formData, comment: e.target.value})}></textarea>
        </div>
        <div className="procomments">
          <button type="submit" id="post" className="c-btn">Edit Comment</button>
        </div>
      </form>
      </div>
    </section>
    </>
  )
}

export default EditComment;