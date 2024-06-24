// eslint-disable-next-line no-unused-vars
import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'

// eslint-disable-next-line react/prop-types
const DefaultComponent = ({children}) => {
  return (
    <div>
      <HeaderComponent />
      {children}
    </div>
  )
}

export default DefaultComponent
