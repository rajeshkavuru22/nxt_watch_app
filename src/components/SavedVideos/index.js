import {HiFire} from 'react-icons/hi'
import VideoItem from '../VideoItem'
import Header from '../Header'
import SideBar from '../SideBar'
import ComponentContext from '../../context'
import {ContentContainer, BodyContainer} from './styledComponents'
import './index.css'

const SavedVideos = () => (
  <ComponentContext.Consumer>
    {value => {
      const {theme, savedVideosList} = value

      const showEmptyView = () => (
        <div
          className={`failure-container ${theme === 'DARK' ? 'dark' : 'light'}`}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no videos"
            className="image"
          />
          <h1 className="heading">No saved videos found</h1>
          <p className="description">You can save your videos while watching</p>
        </div>
      )

      const showVideosData = () => (
        <>
          <div className={`top ${theme === 'DARK' ? 'dark' : 'light'}`}>
            <div
              className={`logo-container ${
                theme === 'DARK' ? 'icon-dark-theme' : 'icon-light-them'
              }`}
            >
              <HiFire />
            </div>
            <h1 className="Head">Saved</h1>
          </div>
          <ul className="videos-list-container">
            {savedVideosList.map(each => (
              <VideoItem Item={each} key={each.id} />
            ))}
          </ul>
        </>
      )

      const savedVideosContent = () => {
        if (savedVideosList.length === 0) {
          return showEmptyView()
        }
        return showVideosData()
      }

      return (
        <>
          <Header />
          <BodyContainer>
            <SideBar />
            <ContentContainer theme={theme}>
              {savedVideosContent()}
            </ContentContainer>
          </BodyContainer>
        </>
      )
    }}
  </ComponentContext.Consumer>
)

export default SavedVideos
