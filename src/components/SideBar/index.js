import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddLine} from 'react-icons/ri'
import ComponentContext from '../../context'
import {
  SidebarContainer,
  TabsList,
  Tab,
  Name,
  BottomContainer,
  Head,
  SocialmediaContainer,
  Item,
  ImageIcon,
  Description,
} from './styledComponents'
import './index.css'

const SideBar = () => (
  <ComponentContext.Consumer>
    {value => {
      const {theme} = value
      return (
        <SidebarContainer theme={theme}>
          <TabsList>
            <Link to="/" className="Link">
              <Tab>
                <AiFillHome />
                <Name>Home</Name>
              </Tab>
            </Link>
            <Link to="/trending" className="Link">
              <Tab>
                <AiFillFire />
                <Name>Trending</Name>
              </Tab>
            </Link>
            <Link to="/gaming" className="Link">
              <Tab>
                <SiYoutubegaming />
                <Name>Gaming</Name>
              </Tab>
            </Link>
            <Link to="/saved-videos" className="Link">
              <Tab>
                <RiPlayListAddLine />
                <Name>Saved Videos</Name>
              </Tab>
            </Link>
          </TabsList>
          <BottomContainer>
            <Head>CONTACT US</Head>
            <SocialmediaContainer>
              <Item>
                <ImageIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </Item>
              <Item>
                <ImageIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </Item>
              <Item>
                <ImageIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </Item>
            </SocialmediaContainer>
            <Description>
              Enjoy! Now to see your channels and recommendations!
            </Description>
          </BottomContainer>
        </SidebarContainer>
      )
    }}
  </ComponentContext.Consumer>
)

export default SideBar
