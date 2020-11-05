import React from 'react'
import { Link } from 'react-router-dom'

const Question = () => {
  return (
    <div>
      <h1>Do you like scary movies?</h1>
      <button>
        <Link to= {`/answer/${bugName}`}>{bugName}</Link>
      </button>
    </div>
  )
}

export default Question
