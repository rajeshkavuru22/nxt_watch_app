import {Component} from 'react'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import './index.css'
import {LikeButton, SaveButton, DisLikeButton} from './styledComponents'
import ComponentContext from '../../context'

class VideoDetails extends Component {
  state = {Item: {}, isDisLiked: false, isLiked: false, isSaved: false}

  componentDidMount() {
    const {videoItem} = this.props
    this.setState({
      Item: {...videoItem},
      isLiked: videoItem.isLiked,
      isDisLiked: videoItem.isDisLiked,
      isSaved: videoItem.isSaved,
    })
  }

  onClickSaveButton = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  onClickLikeButton = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  onClickDisLikeButton = () => {
    this.setState(prevState => ({
      isLiked: false,
      isDisLiked: !prevState.isDisLiked,
    }))
  }

  render() {
    const {Item, isLiked, isDisLiked, isSaved} = this.state
    console.log(Item)
    const {videoItem, saveVideo} = this.props
    const {
      id,
      title,
      videoUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoItem
    const {name, profileImageUrl, subscriberCount} = channel
    const modifiedDate = formatDistanceToNow(new Date(publishedAt))
    console.log(modifiedDate)
    console.log(isLiked, isSaved)
    return (
      <ComponentContext.Consumer>
        {value => {
          const {theme, savedVideosList} = value

          return (
            <>
              <ReactPlayer url={videoUrl} width="100" />
              <div className="body-container">
                <p className="Title">{title}</p>
                <div className="details-container">
                  <div className="list-container">
                    <p className="Item">{viewCount}</p>
                    <p className="Item">{modifiedDate}</p>
                  </div>
                  <div className="list-container">
                    <button
                      type="button"
                      onClick={this.onClickLikeButton}
                      className={`Button ${isLiked ? 'selected' : ''}`}
                    >
                      <BiLike />
                      <p className="Name">Like</p>
                    </button>
                    <button
                      type="button"
                      onClick={this.onClickDisLikeButton}
                      className={`Button ${isDisLiked ? 'selected' : ''}`}
                    >
                      <BiDislike />
                      <p className="Name">DisLike</p>
                    </button>
                    <button
                      type="button"
                      onClick={this.onClickSaveButton}
                      className={`Button ${isSaved ? 'selected' : ''}`}
                    >
                      <MdPlaylistAdd />
                      <p className="Name">Save</p>
                    </button>
                  </div>
                </div>
                <hr className="hr-line" />
                <div className="channel-container">
                  <img
                    src={profileImageUrl}
                    alt="channel logo"
                    className="Logo"
                  />
                  <div className="title-channel-container">
                    <p className="head">{name}</p>
                    <p className="subscribers">{subscriberCount} Subscribers</p>
                  </div>
                </div>
                <p className="description">{description}</p>
              </div>
            </>
          )
        }}
      </ComponentContext.Consumer>
    )
  }
}

export default VideoDetails
