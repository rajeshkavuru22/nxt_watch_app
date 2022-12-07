import styled from 'styled-components'

export const Navbar = styled.nav`
  background-color: ${props =>
    props.theme === 'DARK' ? '#000000' : '#ffffff'};
  background-size: cover;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    padding-left: 50px;
  }
`

export const Image = styled.img`
  width: 120px;
  align-self: center;
`

export const ToolContainer = styled.div`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0px;
`

export const Item = styled.div`
  align-self: center;
  margin-left: 20px;
`

export const MenuItem = styled.div`
  align-self: center;
  margin-left: 20px;
  color: ${props => (props.theme === 'LIGHT' ? '#313131' : '#ffffff')};
  @media (min-width: 768px) {
    display: none;
  }
`

export const LogoutItem = styled.button`
  align-self: center;
  margin-left: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${props => (props.theme === 'LIGHT' ? '#313131' : '#ffffff')};
  @media (min-width: 768px) {
    display: none;
  }
`

export const DpItem = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-self: center;
    margin-left: 20px;
  }
`

export const ButtonItem = styled.li`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-self: center;
    margin-left: 20px;
  }
`

export const Dp = styled.img`
  width: 20px;
`

export const Btn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`

export const Button = styled.button`
  display: none;
  @media (min-width: 768px) {
    background-color: transparent;
    border: 1px solid #0070c1;
    color: #0070c1;
    padding: 10px;
    width: 80px;
    margin-left: 20px;
    display: flex;
  }
`

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  align-self: center;
  color: ${props => (props.theme === 'LIGHT' ? '#000000' : '#ffffff')};
`
