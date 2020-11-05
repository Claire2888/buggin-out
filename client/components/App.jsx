import React from 'react'
import { Route } from 'react-router-dom'
 import Home from './home'
import Question from './Question'

const App = () => {
  return (
    <>
      
      <div className='main'>
         <h1>BUGS</h1>
        <Route path='/question' component={Question}/> 
        {/* <Route path='/list/:rank' component={Classifications} />
        <Route path='/rank/:rank/:name' component={RankDescription} /> */}
        <Route exact path='/' component={Home} />
     
      </div>
    </>
  )
}

export default App
