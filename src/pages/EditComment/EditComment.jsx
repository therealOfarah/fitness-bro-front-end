import * as profileService from '../../services/profileService'
import * as commentService from '../../services/commentService'
import { useEffect, useState, useRef } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

const EditComment = (props) => {
  const { id } = useParams()

  const [comment, setComment] = useState('')

  useEffect(() => {
    const fetchComment = async (commentId) => {
      const viewComment = await commentService.show(commentId)
      setComment(viewComment.comment)
    }
    fetchComment(id)
  }, [id])

  console.log(comment)

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
                    <textarea type="text" name="comment" value={comment} id=""msg cols="30" rows="5" className="container" ></textarea>
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