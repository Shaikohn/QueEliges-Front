import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <h1 style={{fontSize: '50px'}}><span style={{color: 'violet'}}>QUE</span> <span style={{color: 'orange'}}>ELIGES</span></h1>
    <div className='container'>
      <div>
        <button className='firstOption'><h1>Primera opcion aaaaaaaaaaaaaaaaaaa</h1></button>
      </div>
      <div className='orDiv'>
        <h1 className='orH1'>O</h1>
      </div>
      <div>
        <button className='secondOption'><h1>Segunda opcion bbbbbbbbbbbbbb</h1></button>
      </div>
    </div>
    <button className='nextButton'><h2>SIGUIENTE</h2></button>
    </>
  )
}

export default App
