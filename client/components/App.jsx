import React from 'react'
import { Route } from 'react-router-dom'
 import Home from './home'

const App = () => {
  return (
    <>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Route path='/question' component={Home} /> 
        {/* <Route path='/list/:rank' component={Classifications} />
        <Route path='/rank/:rank/:name' component={RankDescription} /> */}
        <Route exact path='/' component={Home} />
      </div>
    </>
  )
}

export default App
