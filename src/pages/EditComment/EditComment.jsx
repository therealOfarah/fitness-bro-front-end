import * as commentService from '../../services/commentService'
import { useEffect, useState} from 'react'
import { useLocation, useParams, useNavigate} from 'react-router-dom'

const EditComment = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const location = useLocation()

  const [formData, setFormData] = useState({
    comment:''
  })

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
            <div className="form-group">
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