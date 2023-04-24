/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-unresolved */
// Write your code here
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = props => {
  const {data} = props
  const {thumbnailUrl, videoUrl} = data
  return (
    <Popup
      modal
      trigger={<img src={thumbnailUrl} alt="thumbnail" className="image" />}
      className="popup-content"
    >
      {close => (
        <div className="modal-container">
          <button
            className="close-button"
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose size={20} color="#231f20" />
          </button>
          <ReactPlayer url={videoUrl} controls />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
