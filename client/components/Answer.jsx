import React from 'react'
import bugs from '../../data/bugs.js'
const Answer = (props) => {
  const num=Math.round(Math.random())
  console.log(num)
  const bug = props.match.params.bug
  const {image, facts, name} = bugs.find(({name}) => name === bug)
  return(
    <div>
      <h1 className='font-question'>you are a {name} </h1>
      <img src={image}></img>
        <p>Did you know {facts[num]}</p>
    </div>
  )
}

export default Answer