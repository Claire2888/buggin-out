import React from 'react'
import { Link } from 'react-router-dom'
import Questions from '../../data/QS1'
import Button from 'react-bootstrap/Button'

const Question2 = () => {
  const num=Math.round(Math.random()*2)
  return (
    <div>
      <h1 className= 'font-question'>{Questions[num]}</h1>

      <Link to='/answer/Spider'><Button type='button' className='font-question, btn btn-primary-question btn-lg'>yes</Button>
      </Link>
      <Link to='/answer/Beetle'><Button type='button' className='font-question, btn btn-primary-question btn-lg'>no</Button>
      </Link>
    </div>
  )
}

export default Question2
