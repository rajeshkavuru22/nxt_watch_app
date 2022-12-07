import styled from 'styled-components'

export const Banner = styled.div`
  width: 100%;
  height: 250px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const LogoAndCloseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

export const Image = styled.img`
  width: 100px;
  height: 30px;
  align-self: center;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 30px;
`

export const Description = styled.p`
  font-size: 12px;
  color: #000000;
  width: 50%;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const GetButton = styled.button`
  background-color: transparent;
  border: 1px solid #010101;
  padding: 10px;
  color: #010101;
  font-size: 12px;
  width: 120px;
  @media (min-width: 768px) {
    font-weight: bold;
  }
`
