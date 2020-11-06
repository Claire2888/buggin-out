import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Question from './Question'
import Answer from './Answer'
import Question2 from './Question2'
import Question3 from './Question3'

const App = () => {
  return (
    <>

      <div className='main'>
        
        <Route exact path='/' component={Home} />
        <Route exact path='/question' component={Question}/>
        <Route path='/question/Crawly' component={Question2}/>
        <Route path='/question/skritery' component={Question3}/>
        <Route path='/answer/:bug' component={Answer} />

      </div>
    </>
  )
}

export default App
