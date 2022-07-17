
import { Link } from "react-router-dom"

const Profile = ({user}) => {

  return (
    <main>
      <h1>Welcome {user.name}!</h1>
      <h2>{user.email}</h2>
      <h2>Change Password <Link      
        to="/changePassword">
          HERE
        </Link>
      </h2>
    </main>
  )
}

export default Profile