import './index.css'
import ComponentContext from '../../context'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ComponentContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <div
            className={`failure-container ${
              theme === 'DARK' ? 'dark' : 'light'
            }`}
          >
            <img
              src={
                theme === 'DARK'
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
              className="image"
            />
            <h1 className="heading">Oops! Something Went Wrong</h1>
            <p className="description">We are having some trouble</p>
            <button className="retry" type="button" onClick={onClickRetry}>
              Retry
            </button>
          </div>
        )
      }}
    </ComponentContext.Consumer>
  )
}

export default FailureView
