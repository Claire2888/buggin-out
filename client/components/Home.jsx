import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Home = () => {

  return (
  <div>
    <h2 className='font '>What kind of bug are you?</h2>
    <Link to='/question'>
      <Button type="button" className="font, btn btn-primary btn-lg">Go!</Button>
    </Link>
  </div>

  )

}
export default Home