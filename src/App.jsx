// gifs generator

import { useState } from 'react'
import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  

  return (
       <div className='top-div'>
         <h2 className='h2'>Random Gifs</h2>
         <div className='div-2'>
            <Random/>
            <Tag/>
         </div>
       </div>
  )
}

export default App
