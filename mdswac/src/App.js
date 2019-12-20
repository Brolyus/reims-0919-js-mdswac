import React from 'react'
import Output from './components/Output'
import Middle from './components/Middle'
import Input from './components/Input'
import './App.css'
import CounterBar from './components/CounterBar'
import Navbar from './components/Navbar'

let MarkdownIt = require('markdown-it'),
  md = new MarkdownIt('commonmark')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      mdText: '',
      renderedText: ''
    }
  }

  insertMyText = (textToInsert) => {
    
    let cursorPosition = this.myRef.current.selectionStart
    console.log(cursorPosition)
    let currentText=this.state.mdText

    let textBeforeCursorPosition = currentText.substring(0, cursorPosition)
    console.log(textBeforeCursorPosition)
    let textAfterCursorPosition = currentText.substring(cursorPosition, currentText.length)
    console.log(textAfterCursorPosition)
    this.updateState(textBeforeCursorPosition + textToInsert + textAfterCursorPosition)

  }

  updateState = (newText) => {
    const result = md.render(newText)
    this.setState({
      mdText: newText,
      renderedText: result
    })
  }


  handleReset = () => {
    this.setState({ mdText: '', renderedText: '' })
  }

  handleChange = event => {
    this.setState({
      mdText: event.target.value,
      renderedText: md.render(event.target.value)
    })
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Navbar />
          <div className='cahier'>
            <Input
              mdText={this.state.mdText}
              handleChange={this.handleChange}
            />
            <Middle
              insertMyText={this.insertMyText}
              myRef={this.myRef} />
            <Output renderedText={this.state.renderedText} />
          </div>
          <CounterBar mdText={this.state.mdText} />
        </header>
      </div>
    )
  }
}

export default App
