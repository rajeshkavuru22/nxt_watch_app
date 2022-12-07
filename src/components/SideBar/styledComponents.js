import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    background-color: ${props =>
      props.theme === 'DARK' ? '#000000' : '#ffffff'};
    background-size: cover;
    color: ${props => (props.theme === 'DARK' ? '#ffffff' : '#000000')};
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
  }
`

export const TabsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`

export const Tab = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Name = styled.p`
  color: #909090;
  margin-left: 15px;
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

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Head = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 20px;
`

export const SocialmediaContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  width: 100%;
  margin: 0px;
  padding: 0px;
  margin-bottom: 10px;
`

export const Item = styled.li`
  margin-right: 10px;
  align-self: center;
`

export const ImageIcon = styled.img`
  width: 25px;
  height: 25px;
`

export const Description = styled.p`
  font-size: 18px;
`
