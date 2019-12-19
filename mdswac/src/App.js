import React from 'react'
import './App.css'
import convertToHTML from 'markdown-to-html-converter'

const markdownStr = `#We test MDSWAC app
1 frefrrf
2 freerf
3 frettg
`
const htmlStr = convertToHTML(markdownStr)

function App() {
    return (
        <div className='App'>
            <header className='App-header'>{htmlStr}</header>
        </div>
    )
}

export default App
