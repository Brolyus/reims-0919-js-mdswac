import React from 'react'
import convertToHTML from 'markdown-to-html-converter'
import Output from './components/Output'
import './App.css'

const markdownStr = `# TEST
### Ordered list
1. Item 1
2. A second item
3. Number 3
4. Ⅳ
Test premier Test second
#### New test
`

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
