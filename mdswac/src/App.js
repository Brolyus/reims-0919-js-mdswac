import React from 'react';
import './App.css';
import convertToHTML from 'markdown-to-html-converter';
import Input from './components/Input.js';
import Navbar from './components/Navbar.js'


//const markdownStr = '#We test MDSWAC app'
//const htmlStr = convertToHTML(markdownStr)

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar/>
        <Input />
      </header>
            
    </div>
  )
}

export default App
