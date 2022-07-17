import { Link } from "react-router-dom"
import ProfileDetails from "../../pages/ProfileDetails/ProfileDetails";

const Profile = (props) => {


  return ( 
    <>
    <ul className='profile-list'>
    <Link to={`/profiles/${props.profile._id}`}>{props.profile.name}</Link>
    </ul>
    </>
  );
}

export default Profile