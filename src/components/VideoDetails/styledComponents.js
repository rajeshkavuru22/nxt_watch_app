import styled from 'styled-components'

export const SaveButton = styled.button`
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const LikeButton = styled.button`
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const DisLikeButton = styled.button`
  color: ${props => (props.isDisLiked ? '#2563eb' : '#64748b')};
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`
