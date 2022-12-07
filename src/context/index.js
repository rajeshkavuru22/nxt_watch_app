import React from 'react'

const ComponentContext = React.createContext({
  theme: 'DARK',
  changeTheme: () => {},
  savedVideosList: [],
})

export default ComponentContext
