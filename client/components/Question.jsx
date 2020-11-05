import React from 'react'
import { Link } from 'react-router-dom'

const Question = () => {
  return (
    <div>
      <h1>Do you like scary movies?</h1>
      <Link to='/question'><button>button</button></Link>
    </div>
  )
}

export default Question
