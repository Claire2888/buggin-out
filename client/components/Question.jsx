import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Question = () => {
  return (
    <div>
      <h1 className= 'font-question'>Do you like scary movies?</h1>
      <Link to='/question/Crawly'>
        <Button type='button' className='font-question, btn btn-primary-question btn-lg'>yes</Button></Link>
      
      <Link to='/question/skritery'>
    <Button type='button' className='font-question, btn btn-primary-question btn-lg'>no</Button>
    </Link>
    </div>
  )
}

export default Question
