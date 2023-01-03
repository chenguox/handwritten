import React from 'react'
import enhancedUserInfo from '../hoc/enhanced_props'

function Home(props) {
  return (
    <div>Home: {props.name}</div>
  )
}

export default enhancedUserInfo(Home)