import React from 'react'
import { Link } from 'react-router-dom'

const Question2 = () => {
  return (
    <div>
      <h1>Do you like to make things?</h1>
      
      <Link to='/answer/Spider'><button>Yes</button></Link>
      <Link to='/answer/Beetle'><button>No</button></Link>
    </div>
  )
}

export default Question2
