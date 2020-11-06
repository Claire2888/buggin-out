import React from 'react'
import bugs from '../../data/bugs.js'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Answer = (props) => {
  const num=Math.round(Math.random()*2)
  console.log(num)
  const bug = props.match.params.bug
  const {image, facts, name} = bugs.find(({name}) => name === bug)
  return(
    <div>
      <h1 className='font-answer'>you are a {name}! </h1>
      <img src={image} height='700px'width='600px'></img>
        <p>{facts[num]}</p>
        <Link to='/'><Button type="button" className="font-answer, btn btn-primary-answer btn-lg">again?</Button></Link>
    </div>
  )
}

export default Answer