import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ContextComponent from '../../context'
import {
  LoginFormContainer,
  Form,
  Image,
  InputContainer,
  ShowPasswordContainer,
  Label,
  Input,
  Checkbox,
  Text,
  Error,
  Button,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = event => {
    this.setState({showPassword: event.target.checked})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = theme => {
    const {password, showPassword} = this.state
    return (
      <>
        <Label className="input-label" htmlFor="password">
          PASSWORD
        </Label>
        <Input
          type={showPassword ? 'text' : 'password'}
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
          theme={theme}
        />
      </>
    )
  }

  renderUsernameField = theme => {
    const {username} = this.state
    return (
      <>
        <Label htmlFor="username">USERNAME</Label>
        <Input
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
          theme={theme}
        />
      </>
    )
  }

  renderShowPasswordField = theme => {
    const {showPassword} = this.state
    return (
      <>
        <Checkbox
          type="checkbox"
          id="checkbox"
          value={showPassword}
          onChange={this.onChangeCheckbox}
        />
        <Text htmlFor="checkbox" theme={theme}>
          Show Password
        </Text>
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ContextComponent.Consumer>
        {value => {
          const {theme} = value
          console.log(theme)
          return (
            <LoginFormContainer theme={theme}>
              <Form onSubmit={this.submitForm} theme={theme}>
                <Image
                  src={
                    theme === 'DARK'
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <InputContainer>{this.renderUsernameField()}</InputContainer>
                <InputContainer>{this.renderPasswordField()}</InputContainer>
                <ShowPasswordContainer>
                  {this.renderShowPasswordField()}
                </ShowPasswordContainer>
                <Button type="submit">Login</Button>
                {showSubmitError && <Error>*{errorMsg}</Error>}
              </Form>
            </LoginFormContainer>
          )
        }}
      </ContextComponent.Consumer>
    )
  }
}

export default LoginForm
