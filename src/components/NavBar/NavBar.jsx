import { Link } from 'react-router-dom'
import '../../styles/nav.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <Link to="/meals">MEALS</Link>
            <Link to="/workout">WORKOUT</Link>
            <Link to="/profile">PROFILE</Link>
            <Link to="/meals">Meals</Link>
            <Link to="" onClick={handleLogout}>LOG OUT</Link>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign up</Link>
            <Link to="/meals">Meals</Link>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
