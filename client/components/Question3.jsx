import React from 'react'
import { Link } from 'react-router-dom'

const Question3 = () => {
  return (
    <div>
      <h1>Do you like to swim?</h1>
      <Link to='/answer/Weta'><button>Yes</button></Link>
      <Link to='/answer/Moth'><button>No</button></Link>
    </div>
  )
}

export default Question3
