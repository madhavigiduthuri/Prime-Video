// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="wrap">
        <h1 className="action-title">Action Movies</h1>
        <MoviesSlider
          moviesList={moviesList.filter(each => each.categoryId === 'ACTION')}
        />
      </div>
      <div className="wrap">
        <h1 className="action-title">Comedy Movies</h1>
        <MoviesSlider
          moviesList={moviesList.filter(each => each.categoryId === 'COMEDY')}
        />
      </div>
    </div>
  )
}

export default PrimeVideo
