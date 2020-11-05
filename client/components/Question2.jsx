import React from 'react'
import { Link } from 'react-router-dom'

const Question2 = () => {
  return (
    <div>
      <h1>Are you a Beetle?</h1>
      <Link to='/answer/Beetle'><button>Yes</button></Link>
      <Link to='/answer/Spider'><button>No</button></Link>
    </div>
  )
}

export default Question2
