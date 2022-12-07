import styled from 'styled-components'

export const BodyContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: auto;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.theme === 'LIGHT' ? '#f1f1f1' : '#313131'};
  color: ${props => (props.theme === 'LIGHT' ? '#000000' : '#ffffff')};
  background-size: cover;
  width: 100%;
  overflow: auto;
`
