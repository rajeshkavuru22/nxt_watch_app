import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
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

class Gaming extends Component {
  state = {
    List: [],
    apiResponseStatus: apiResponseList.apiInitial,
  }

  componentDidMount() {
    this.getGamingVideosData()
  }

  getGamingVideosData = async () => {
    this.setState({apiResponseStatus: apiResponseList.apiInProgress})
    const JwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${JwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const List = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      console.log(List)
      this.setState({
        apiResponseStatus: apiResponseList.apiSuccess,
        List,
      })
    } else {
      this.setState({apiResponseStatus: apiResponseList.apiFailure})
    }
  }

  onRetry = () => {
    this.getGamingVideosData()
  }

  getFullDetails = id => {
    const {history} = this.props
    history.replace(`/videos/${id}`)
  }

  successView = () => {
    const {List} = this.state
    return (
      <ul className="videos-list-container">
        {List.map(each => (
          <VideoItem
            Item={each}
            key={each.id}
            getFullDetails={this.getFullDetails}
          />
        ))}
      </ul>
    )
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
                  <div className={`top ${theme === 'DARK' ? 'dark' : 'light'}`}>
                    <div
                      className={`logo-container ${
                        theme === 'DARK'
                          ? 'icon-dark-theme'
                          : 'icon-light-theme'
                      }`}
                    >
                      <SiYoutubegaming />
                    </div>
                    <h1 className="Heading">Gaming</h1>
                  </div>
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

export default Gaming
