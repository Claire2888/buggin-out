import React from 'react'
import bugs from '../../data/bugs.js'
const Answer = (props) => {
  
  const bug = props.match.params.bug
  const pickBug = bugs.find(({name}) => name === bug)
  return(
    <div>
      <h1>you are a {bug} </h1>
      <img src={pickBug.image}></img>
        <p>Fun facts</p>
    </div>
  )
}

export default Answer