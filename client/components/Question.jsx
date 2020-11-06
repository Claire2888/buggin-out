import React from 'react'
import { Link } from 'react-router-dom'

const Question = () => {
  return (
    <div>
      <h1>Do you like scary movies?</h1>
      <Link to='/question/Crawly'><button>yes</button></Link>
      <Link to='/question/skritery'><button>no</button></Link>
    </div>
  )
}

export default Question
