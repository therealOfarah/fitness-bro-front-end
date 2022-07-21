import * as profileService from '../../services/profileService'
import * as commentService from '../../services/commentService'
import { useEffect, useState, useRef } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

const EditComment = (props) => {
  const { id } = useParams()
  const location = useLocation()

  const [comment, setComment] = useState('')
  // const [formData, setFormData] = useState(location.state.comment)

  function handleSubmit(evt) {
    evt.preventDefault()
    props.handleUpdate(comment)
  }

  // const handleChange = evt => {
	// 	setFormData({ ...formData, [evt.target.name]: evt.target.value })
  // }

  useEffect(() => {
    const fetchComment = async (commentId) => {
      const viewComment = await commentService.show(commentId)
      setComment(viewComment.comment)
    }
    fetchComment(id)
  }, [id])

  console.log(location.state.profile._id)

  return ( 
    <>
    <h1>Testing</h1>
    <section>
                <div className="c-container">
                <h1>Comments</h1>
                <form id="algin-form" onSubmit={handleSubmit}>
                  <div class="form-group">
                    
                    <h4>Leave a comment</h4>  
                    <label for="message">Message</label>
                    <textarea type="text" name="comment" value={comment} id=""msg cols="30" rows="5" className="container" onChange={(e) => setComment(e.target.value)}></textarea>
                  </div>
                  <div className="procomments">
                    <Link to={`/profiles/${location.state.profile._id}`}>
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