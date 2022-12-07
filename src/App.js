import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ComponentContext from './context'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

class App extends Component {
  state = {theme: 'LIGHT', savedVideosList: []}

  ChangeTheme = theme => {
    if (theme === 'LIGHT') {
      this.setState({theme: 'DARK'})
    } else {
      this.setState({theme: 'LIGHT'})
    }
  }

  render() {
    const {theme, savedVideosList} = this.state
    return (
      <ComponentContext.Provider
        value={{
          theme,
          changeTheme: this.ChangeTheme,
          savedVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ComponentContext.Provider>
    )
  }
}

export default App
