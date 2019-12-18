import React from 'react'
import './App.css'
import convertToHTML from 'markdown-to-html-converter'

const markdownStr = '#We test MDSWAC app'
const htmlStr = convertToHTML(markdownStr)

function App() {
  return (
    <div className='App'>
      <header className='App-header'>{htmlStr}</header>
    </div>
  )
}

export default App
