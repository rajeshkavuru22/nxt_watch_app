import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import BannerItem from '../BannerItem'
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

class Home extends Component {
  state = {
    List: [],
    showBanner: true,
    apiResponseStatus: apiResponseList.apiInitial,
    search: '',
    searchText: '',
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({apiResponseStatus: apiResponseList.apiInProgress})
    const {search} = this.state
    const JwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
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
    this.getVideosData()
  }

  closeBanner = () => {
    this.setState(prevState => ({showBanner: !prevState.showBanner}))
  }

  onChangeSearchText = event => {
    this.setState({searchText: event.target.value.toLowerCase()})
  }

  onSearch = () => {
    const {searchText} = this.state
    this.setState({search: searchText}, this.getVideosData)
  }

  getFullDetails = id => {
    const {history} = this.props
    history.replace(`/videos/${id}`)
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0070c1" height="50" width="50" />
    </div>
  )

  render() {
    const {showBanner} = this.state
    return (
      <ComponentContext.Consumer>
        {value => {
          const {theme} = value

          const searchBar = () => {
            const {searchText} = this.state
            return (
              <div
                className={`search-container ${
                  theme === 'DARK' ? 'Color' : ''
                }`}
              >
                <input
                  className="search"
                  type="search"
                  placeholder="Search"
                  onChange={this.onChangeSearchText}
                  value={searchText}
                />
                <button
                  className="btn"
                  type="button"
                  data-testid="searchButton"
                  onClick={this.onSearch}
                >
                  <BsSearch className="search-icon" />
                </button>
              </div>
            )
          }

          const failureView = () => (
            <>
              {searchBar()}
              <FailureView onRetry={this.onRetry} />
            </>
          )

          const renderNoVideosView = () => (
            <>
              {searchBar()}
              <div
                className={`failure-container ${
                  theme === 'DARK' ? 'dark' : 'light'
                }`}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                  className="image"
                />
                <h1 className="heading">No Search results found</h1>
                <p className="description">
                  Try different key words or remove search filter
                </p>
                <button className="retry" type="button">
                  Retry
                </button>
              </div>
            </>
          )

          const successView = () => {
            const {List} = this.state
            if (List.length === 0) {
              return renderNoVideosView()
            }
            return (
              <>
                {searchBar()}
                <ul className="videos-list-container">
                  {List.map(each => (
                    <VideoItem
                      Item={each}
                      key={each.id}
                      getFullDetails={this.getFullDetails}
                    />
                  ))}
                </ul>
              </>
            )
          }

          const renderResult = () => {
            const {apiResponseStatus} = this.state
            switch (apiResponseStatus) {
              case apiResponseList.apiSuccess:
                return successView()
              case apiResponseList.apiFailure:
                return failureView()
              case apiResponseList.apiInProgress:
                return this.renderLoader()
              default:
                return null
            }
          }
          return (
            <>
              <Header />
              <BodyContainer>
                <SideBar />
                <ContentContainer theme={theme}>
                  <BannerItem
                    onClickClose={this.closeBanner}
                    showBanner={showBanner}
                    theme={theme}
                  />
                  {renderResult()}
                </ContentContainer>
              </BodyContainer>
            </>
          )
        }}
      </ComponentContext.Consumer>
    )
  }
}

export default Home
