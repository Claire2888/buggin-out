import React from 'react'
import { Link } from 'react-router-dom'
import Questions from '../../data/QS2'
const Question3 = () => {
  const num=Math.round(Math.random()*2)
  return (
    <div>
      <h1>{Questions[num]}</h1>
      <Link to='/answer/Weta'><button>Yes</button></Link>
      <Link to='/answer/Moth'><button>No</button></Link>
    </div>
  )
}

export default Question3
