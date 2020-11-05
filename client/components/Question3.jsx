import React from 'react'
import { Link } from 'react-router-dom'

const Question3 = () => {
  return (
    <div>
      <h1>Are you a Moth?</h1>
      <Link to='/answer/Moth'><button>Yes</button></Link>
      <Link to='/answer/Weta'><button>No</button></Link>
    </div>
  )
}

export default Question3
