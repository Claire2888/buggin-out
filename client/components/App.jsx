import React from 'react'
import { Route } from 'react-router-dom'


const App = () => {
  return (
    <>
      <h1>Navigating the taxonomic routes</h1>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Route path='/' component={Nav} />
        <Route path='/list/:rank' component={Classifications} />
        <Route path='/rank/:rank/:name' component={RankDescription} />
        <Route exact path='/' component={Home} />
      </div>
    </>
  )
}

export default App
