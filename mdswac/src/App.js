import React from 'react'
import Output from './components/Output'
import Middle from './components/Middle'
import Input from './components/Input'
import './App.css'
import CounterBar from './components/CounterBar'
import Navbar from './components/Navbar'

var MarkdownIt = require('markdown-it'),
  md = new MarkdownIt()

class App extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      mdText: '',
      renderedText: ''
    }
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

  insertMyText = textToInsert => {
    let currentText = this.myRef.current.innerHTML
    let cursorPosition = this.myRef.current.selectionStart

    while (cursorPosition) {
      if (currentText[cursorPosition - 1].charCodeAt() === 10) {
        break
      } else {
        cursorPosition--
      }
    }

    let textBeforeCursorPosition = currentText.substring(0, cursorPosition)
    let textAfterCursorPosition = currentText.substring(
      cursorPosition,
      currentText.length
    )
    this.updateState(
      textBeforeCursorPosition + textToInsert + textAfterCursorPosition
    )
  }

  updateState = newText => {
    const result = md.render(newText)
    this.setState({
      mdText: newText,
      renderedText: result
    })
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Navbar />
          <div className='cahier'>
            <Input
              myRef={this.myRef}
              mdText={this.state.mdText}
              handleChange={this.handleChange}
              insertMyText={this.insertMyText}
            />
            <Middle handleTitleSynthax={this.handleTitleSynthax} />
            <Output renderedText={this.state.renderedText} />
          </div>
          <CounterBar mdText={this.state.mdText} />
        </header>
      </div>
    )
  }
}

export default App
