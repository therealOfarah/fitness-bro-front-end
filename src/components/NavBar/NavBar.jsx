import '../../App.css'
import '../../styles/nav.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Fitness Bros</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/meals">Meals</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/workouts">Workouts</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/profiles">Community</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/account">Account</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={handleLogout}>Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      : 
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">Fitness Bros</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Welcome</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/meals">Meals</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/workouts">Workouts</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      }
    </>
  )
}


export default NavBar
