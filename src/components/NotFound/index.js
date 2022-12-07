import Header from '../Header'
import SideBar from '../SideBar'
import ComponentContext from '../../context'
import './index.css'

const NotFound = () => (
  <ComponentContext.Consumer>
    {value => {
      const {theme} = value

      const notFound = () => (
        <div
          className={`failure-container ${theme === 'DARK' ? 'dark' : 'light'}`}
        >
          <img
            src={
              theme === 'DARK'
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
            }
            alt="not found"
            className="image"
          />
          <h1 className="heading">Page not found</h1>
          <p className="description">
            we are sorry, the page you requested could not be found
          </p>
        </div>
      )

      return (
        <div className="container">
          <Header />
          <div className="Body">
            <SideBar />
            {notFound()}
          </div>
        </div>
      )
    }}
  </ComponentContext.Consumer>
)

export default NotFound
