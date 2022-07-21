import '../../App.css'
import '../../styles/nav.css'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
    {user ?
      <Navbar  variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className='brand'>Fitness <span>Bros</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              <Link to="/workouts" className="nav-link">Workouts</Link>
              <Link to="/meals" className="nav-link">Meals</Link>
              <Link to="/profiles" className="nav-link">Community</Link>
              <Link to={`/profiles/${user.profile}`} className="nav-link">Account</Link>
              <Link className="nav-link" to="/" onClick={handleLogout}>Log Out</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      :
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Fitness <span>Bros</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              <Link to="/workouts" className="nav-link">Workouts</Link>
              <Link to="/meals" className="nav-link">Meals</Link>
              <Link to="/profiles" className="nav-link">Community</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    }
    </>
  );
}

export default NavBar;
