import React from 'react'
import CustomNavBar from './CustomNavBar'

const Base = ({title = "Welcome to our website", children}) => {
  return (
    <div className='container-fluid p-0 m-0' >
      <CustomNavBar></CustomNavBar>
            {children}
        {/* <h1>This is footer</h1> */}
    </div>
  )
}

export default Base