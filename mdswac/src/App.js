import React from 'react'
import './App.css'
import convertToHTML from 'markdown-to-html-converter'
import Output from './components/Output'

const markdownStr = '#We test MDSWAC app'
const htmlStr = convertToHTML(markdownStr)

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Output importData={htmlStr} />
      </header>
    </div>
  )
}

export default App
