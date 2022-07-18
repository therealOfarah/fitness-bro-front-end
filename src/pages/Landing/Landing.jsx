import styles from './Landing.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {carouselImages} from './CarouselImages.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


const Landing = ({ user }) => {

  const [carouselCounter, setCarouselCounter] = useState(0)

  // useEffect(() => {
    
  // })
  let carouselImage = carouselImages[carouselCounter]
  
  function slideLeft() {
    if (carouselCounter === 0) {
      setCarouselCounter(carouselImages.length - 1)
    } else {
      setCarouselCounter(carouselCounter - 1)
    }
  }

  function slideRight() {
    if (carouselCounter === carouselImages.length - 1) {
      setCarouselCounter(0)
    } else {
      setCarouselCounter(carouselCounter + 1)
    }
  }

  useEffect(() => {
    
  }, [carouselCounter])

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
      <TransitionGroup>
      <CSSTransition
      key={carouselImages.index}
      timeout={10000}
      classNames='fade'
      appear={true}
      >
      <div className='carousel'>
        <button className='carousel-button prev' onClick={slideLeft}>LEFT LEFT</button>
        <button className='carousel-button next' onClick={slideRight}>RIGHT RIGHT</button>
        <ul>
          <li className='slide'>
            <img
            src={carouselImage.url}
            alt={carouselImage.alt}
            />
          </li>
        </ul>
      </div>
      </CSSTransition>
      </TransitionGroup>
    </main>
  )
}

export default Landing