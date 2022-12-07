import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoDetails from '../VideoDetails'
import {BodyContainer, ContentContainer} from './styledComponents'
import ComponentContext from '../../context'
import FailureView from '../FailureView'
import './index.css'

const apiResponseList = {
  apiInitial: 'INITIAL',
  apiSuccess: 'SUCCESS',
  apiFailure: 'FAILURE',
  apiInProgress: 'INPROGRESS',
}

class VideoItemDetails extends Component {
  state = {apiResponseStatus: apiResponseList.apiInitial, videoItem: {}}

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiResponseStatus: apiResponseList.apiInProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const JwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${JwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const videoItemDetails = data.video_details
      console.log(videoItemDetails)
      const videoItem = {
        id: videoItemDetails.id,
        title: videoItemDetails.title,
        videoUrl: videoItemDetails.video_url,
        thumbnailUrl: videoItemDetails.thumbnail_url,
        channel: {
          name: videoItemDetails.channel.name,
          profileImageUrl: videoItemDetails.channel.profile_image_url,
          subscriberCount: videoItemDetails.channel.subscriber_count,
        },
        viewCount: videoItemDetails.view_count,
        publishedAt: videoItemDetails.published_at,
        description: videoItemDetails.description,
        isLiked: false,
        isSaved: false,
        isDisLiked: false,
      }
      this.setState({
        apiResponseStatus: apiResponseList.apiSuccess,
        videoItem,
      })
    } else {
      this.setState({apiResponseStatus: apiResponseList.apiFailure})
    }
  }

  saveVideo = modifiedItem => {
    this.setState({videoItem: modifiedItem})
  }

  successView = () => {
    const {videoItem} = this.state
    return (
      <VideoDetails
        key={videoItem.id}
        videoItem={videoItem}
        saveVideo={this.saveVideo}
      />
    )
  }

  onRetry = () => {
    this.getVideoItemDetails()
  }

  failureView = () => <FailureView onRetry={this.onRetry} />

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0070c1" height="50" width="50" />
    </div>
  )

  renderResult = () => {
    const {apiResponseStatus} = this.state
    switch (apiResponseStatus) {
      case apiResponseList.apiSuccess:
        return this.successView()
      case apiResponseList.apiFailure:
        return this.failureView()
      case apiResponseList.apiInProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <ComponentContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <>
              <Header />
              <BodyContainer>
                <SideBar />
                <ContentContainer theme={theme}>
                  {this.renderResult()}
                </ContentContainer>
              </BodyContainer>
            </>
          )
        }}
      </ComponentContext.Consumer>
    )
  }
}

export default VideoItemDetails
