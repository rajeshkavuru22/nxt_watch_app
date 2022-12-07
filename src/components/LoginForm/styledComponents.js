import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  background-color: ${props =>
    props.theme === 'DARK' ? '#000000' : '#ffffff'};
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  background-color: ${props =>
    props.theme === 'DARK' ? '#000000' : '#ffffff'};
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0px 3px 1px 6px
    ${props => (props.theme === 'DARK' ? '#010101' : '#f1f1f1')};
`

export const Image = styled.img`
  width: 120px;
  align-self: center;
  margin-bottom: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`

export const Label = styled.label`
  color: #909090;
  font-size: 11px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const Input = styled.input`
  border-radius: 7px;
  padding: 10px;
  background-color: transparent;
  border: 1px solid #e2e2e2;
  color: ${props => (props.theme === 'DARK' ? '#ffffff' : '#000000')};
`

export const Checkbox = styled.input`
  width: 12px;
  height: 12px;
  margin-right: 10px;
  align-self: center;
`

export const Error = styled.p`
  color: #ff0000;
  font-size: 10px;
  margin-bottom: 20px;
`

export const Text = styled.label`
  color: ${props => (props.theme === 'DARK' ? '#ffffff' : '#000000')};
  font-size: 13px;
  align-self: center;
`

export const Button = styled.button`
  background-color: #0070c1;
  color: #ffffff;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 7px;
`
