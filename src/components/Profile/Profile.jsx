import { Link } from "react-router-dom"
import ProfileDetails from "../../pages/ProfileDetails/ProfileDetails";
import './Profile.css'

const Profile = (props) => {


  return ( 
    <>
      <div className='profile-list'>
        <Link className="prolink" to={`/profiles/${props.profile._id}`} style={{ textDecoration: 'none' }}>{props.profile.name}</Link>
      </div>
    </>
  );
}

export default Profile