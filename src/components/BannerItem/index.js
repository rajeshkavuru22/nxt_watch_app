import {GrFormClose} from 'react-icons/gr'
import {
  Banner,
  LogoAndCloseContainer,
  Image,
  CloseButton,
  Description,
  GetButton,
} from './styledComponents'

const BannerItem = props => {
  const {showBanner, onClickClose} = props
  const closeBanner = () => {
    onClickClose()
  }

  if (showBanner) {
    return (
      <Banner data-testid="banner">
        <LogoAndCloseContainer>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <CloseButton type="button" data-testid="close" onClick={closeBanner}>
            <GrFormClose />
          </CloseButton>
        </LogoAndCloseContainer>
        <Description>Buy Nxt Watch Premium prepaid plans with UPI</Description>
        <GetButton>GET IT NOW</GetButton>
      </Banner>
    )
  }
  return null
}

export default BannerItem
