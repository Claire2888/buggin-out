import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home'
import Question from './Question'
import Answer from './Answer'

const App = () => {
  return (
    <>

      <div className='main'>
        <h1>BUGS</h1>
        <Route exact path='/' component={Home} />
        <Route path='/question' component={Question}/>
        <Route path='/answer' component={Answer} />

      </div>
    </>
  )
}

export default App
