import styles from './Landing.module.css'
import { Link } from 'react-router-dom'
<head>
<script src="https://kit.fontawesome.com/8f2d036c38.js" crossorigin="anonymous"></script>
</head>
const Landing = ({ user }) => {
  console.log(user)
  return (
    <main className={styles.container}>
      <h1>Welcome!</h1>
      {user 
      ? '' 
      : 
      <>
        <Link to="/login">
          <button className={styles.login}>Login</button>
        </Link>
        <Link to="/signup">
          <button className={styles.signup}>SignUp</button>
        </Link>
      </>
      }
      <br />
      <div className='carousel'>
        <button className='carousel-button prev'><i class="fa-solid fa-arrow-left-long"></i></button>
        <button className='carousel-button next'><i className="fa-solid fa-arrow-right-long"></i></button>
        <ul>
          <li className='slide'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95mGZw6daibPByjfzprLe0LMdIeU_l5Ajmg&usqp=CAU" alt="Workout 1" />
          </li>
          <li className='slide'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95mGZw6daibPByjfzprLe0LMdIeU_l5Ajmg&usqp=CAU" alt="Workout 1" />
          </li>
          <li className='slide'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95mGZw6daibPByjfzprLe0LMdIeU_l5Ajmg&usqp=CAU" alt="Workout 1" />
          </li>
        </ul>
      </div>

      <h2>Testing</h2>


    </main>
  )
}

export default Landing