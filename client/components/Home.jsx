import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {

  return (
  <div>
    
    <h2>What kind of bug are you?</h2>
    <Link to='/question'><button>button</button></Link>
    
  </div>

  )

}
export default Home