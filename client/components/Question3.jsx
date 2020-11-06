import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Question3 = () => {
  return (
    <div>
      <h1 className='font-question'>Do you like to swim?</h1>
      <Link to='/answer/Weta'><Button type='button' className='font-question, btn btn-primary-question btn-lg'>yes</Button></Link>
      <Link to='/answer/Moth'><Button type='button' className='font-question, btn btn-primary-question btn-lg'>no</Button></Link>
    </div>
  )
}

export default Question3
