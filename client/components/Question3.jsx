import React from 'react'
import { Link } from 'react-router-dom'
import Questions from '../../data/QS2'
import Button from 'react-bootstrap/Button'

const Question3 = () => {
  const num=Math.round(Math.random()*2)
  return (
    <div>
      <h1 className='font-question'>{Questions[num]}</h1>
      <Link to='/answer/Weta'><Button type='button' className='font-question, btn btn-primary-question btn-lg'>yes</Button></Link>
      <Link to='/answer/Moth'><Button type='button' className='font-question, btn btn-primary-question btn-lg'>no</Button></Link>
    </div>
  )
}

export default Question3
