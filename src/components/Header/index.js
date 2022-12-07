import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineLightMode, MdDarkMode} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import ComponentContext from '../../context'
import {
  Navbar,
  Image,
  ToolContainer,
  Item,
  Button,
  IconButton,
  Btn,
  DpItem,
  Dp,
  MenuItem,
  LogoutItem,
  ButtonItem,
} from './styledComponents'

const Header = props => (
  <ComponentContext.Consumer>
    {value => {
      const {theme, changeTheme} = value

      const onChangeTheme = () => {
        changeTheme(theme)
      }

      const onLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <Navbar theme={theme}>
          <Link to="/">
            <Image
              src={
                theme === 'LIGHT'
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <ToolContainer>
            <IconButton
              type="button"
              onClick={onChangeTheme}
              data-testid="theme"
              theme={theme}
            >
              Theme
            </IconButton>
            <DpItem>
              <Dp
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </DpItem>
            <MenuItem theme={theme}>
              <GiHamburgerMenu />
            </MenuItem>
            <Popup
              modal
              trigger={
                <>
                  <LogoutItem type="button" theme={theme}>
                    <FiLogOut />
                  </LogoutItem>
                  <Button type="button" onClick={onLogout}>
                    Logout
                  </Button>
                </>
              }
            >
              {close => (
                <div className="popup">
                  <p className="alert">jfbwe</p>
                  <div className="buttons-container">
                    <button className="cancel" type="button" onClick={close()}>
                      Cancel
                    </button>
                    <button className="retry" type="button">
                      Confirm
                    </button>
                  </div>
                </div>
              )}
            </Popup>
          </ToolContainer>
        </Navbar>
      )
    }}
  </ComponentContext.Consumer>
)

export default Header
