import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Question2 = () => {
  return (
    <div>
      <h1 className= 'font-question'>Do you like to make things?</h1>

      <Link to='/answer/Spider'><Button type='button' className='font-question, btn btn-primary-question btn-lg'>yes</Button>
      </Link>
      <Link to='/answer/Beetle'><Button type='button' className='font-question, btn btn-primary-question btn-lg'>no</Button>
      </Link>
    </div>
  )
}

export default Question2
