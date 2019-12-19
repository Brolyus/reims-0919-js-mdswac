import React from 'react'
import convertToHTML from 'markdown-to-html-converter'
import Output from './components/Output'
import Input from './components/Input.js';
import './App.css'
import Navbar from './components/Navbar.js'



function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar/>
        <Input/>
        <Output/>
      </header>
            
    </div>
  )
  }

export default App
