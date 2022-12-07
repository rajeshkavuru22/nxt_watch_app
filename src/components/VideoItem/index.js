import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ComponentContext from '../../context'
import './index.css'

const VideoItem = props => {
  const {Item} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = Item
  const {name, profileImageUrl} = channel
  const modifiedDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <ComponentContext.Consumer>
      {value => {
        const {theme} = value

        return (
          <Link to={`/videos/${id}`} className="Link">
            <li className="item-container">
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="thumbnail"
              />
              <div
                className={`content-container ${
                  theme === 'DARK' ? 'dark-theme' : 'light-theme'
                }`}
              >
                <div className="logo-title-container">
                  <img src={profileImageUrl} alt={name} className="logo" />
                  <p className="NAME">{title}</p>
                </div>
                <div className="channel-details-container">
                  <p className="channel">{name}</p>
                  <div className="list">
                    <p className="Item">{viewCount}</p>
                    <p className="Item">{modifiedDate}</p>
                  </div>
                </div>
              </div>
            </li>
          </Link>
        )
      }}
    </ComponentContext.Consumer>
  )
}

export default VideoItem
