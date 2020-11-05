import React from 'react'
import { Route } from 'react-router-dom'
import Question from './Question'

const App = () => {
  return (
    <>
      <h1>BUGS</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Route path='/' component={Question} />

      </div>
    </>
  )
}

export default App
