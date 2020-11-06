import React from 'react'
import { Link } from 'react-router-dom'
import Questions from '../../data/QS'
const Question = () => {
  const num=Math.round(Math.random()*2)
  return (
    <div>
      <h1>{Questions[num]}</h1>
      <Link to='/question/Crawly'><button>yes</button></Link>
      <Link to='/question/skritery'><button>no</button></Link>
    </div>
  )
}

export default Question
