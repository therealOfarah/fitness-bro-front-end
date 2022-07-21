import styles from './Landing.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {carouselImages} from './CarouselImages.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'


  const Landing = ({ user }) => {

  const [carouselCounter, setCarouselCounter] = useState(0)

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


  return (
    <main className={styles.container}>
      {user 
        ? '' 
        : 
        <>
          <Link to="/login">
            <button className='login'>Login</button>
          </Link>
          <Link to="/signup">
            <button className='signup'>SignUp</button>
          </Link>
        </>
      }
      <TransitionGroup>
        <CSSTransition
          in={carouselCounter}
          timeout={10000}
          classNames='fade'
          appear={true}
        >
        <div className='background-carousel'>
          <div className='carousel'>
            <button className='carousel-button prev' onClick={slideLeft}><FontAwesomeIcon icon={faArrowLeftLong} /></button>
            <button className='carousel-button next' onClick={slideRight}><FontAwesomeIcon icon={faArrowRightLong} /></button>
            <ul>
              <li className='slide'>
                <Link to={carouselImage.tag}>
                <img
                  src={carouselImage.url}
                  alt={carouselImage.alt}
                  />
                </Link>
                <p className='carouselText'>{carouselImage.text}</p>
              </li>
            </ul>
          </div>
        </div>
        </CSSTransition>
      </TransitionGroup>
    </main>
  )
}

export default Landing