import React from 'react'
import convertToHTML from 'markdown-to-html-converter'
import Output from './components/Output'
import Input from './components/Input.js';
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Input />
        <Output />
      </header>
    </div>
  )
}

export default App
