import './App.css';
import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import Meals from './pages/Meals/Meals'
import Search from './Search/Search'
import Workout from './pages/Workout/Workout'
import ExerciseDetails from './pages/ExerciseDetails/ExerciseDetails'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails';
import EditComment from './pages/EditComment/EditComment';



const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }
  
  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" 
          element={<Landing 
            user={user} 
            />} 
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles 
          /> : <Navigate to="/login" />}
        />
        <Route
          path="/profiles/:id"
          element={<ProfileDetails
          user={user}
          />}
        />
        <Route
          path="/profiles/:id/edit"
          element={<EditComment
          user={user}
          />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/search"
          element={<Search />}
        />
        <Route
          path="/workouts"
          element={<Workout />}
        />
        <Route
          path="/workouts/:exerciseName"
          element={<ExerciseDetails 
          user={user}
          />}
        />
        <Route
          path="/meals"
          element={<Meals />}
        />
      </Routes>
    </>
  )
}

export default App
