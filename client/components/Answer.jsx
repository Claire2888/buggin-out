import React from 'react'
import bugs from '../../data/bugs.js'
const Answer = (props) => {
  const num=Math.round(Math.random())
  console.log(num)
  const bug = props.match.params.bug
  const {image, facts, name} = bugs.find(({name}) => name === bug)
  return(
    <div>
      <h1>you are a {name}! </h1>
      <img src={image} height='700px'width='600px'></img>
        <p>Did you know {facts[num]}</p>
    </div>
  )
}

export default Answer