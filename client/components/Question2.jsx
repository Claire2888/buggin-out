import React from 'react'
import { Link } from 'react-router-dom'
import Questions from '../../data/QS1'

const Question2 = () => {
  const num=Math.round(Math.random()*2)
  return (
    <div>
      <h1> {Questions[num]} </h1>
      <Link to='/answer/Spider'><button>Yes</button></Link>
      <Link to='/answer/Beetle'><button>No</button></Link>
    </div>
  )
}

export default Question2
