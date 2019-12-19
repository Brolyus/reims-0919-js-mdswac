import React from 'react'
import Output from './components/Output'
import Input from './components/Input'
import './App.css'
import Navbar from './components/Navbar'

var MarkdownIt = require('markdown-it'),
  md = new MarkdownIt()

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mdText: '',
      renderedText: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleReset = () => {
    this.setState({ mdText: '' })
  }

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.setState({
        renderedText: md.render(this.state.mdText)
      })
    }
  }

  handleChange(event) {
    this.setState({ mdText: event.target.value })
  }

  render() {
    console.log(md)
    return (
      <div className='App'>
        <header className='App-header'>
          <Navbar />
          <div className='cahier'>
            <Input
              mdText={this.state.mdText}
              handleChange={this.handleChange}
              handleKeyDown={this.handleKeyDown}
            />
            <Output renderedText={this.state.renderedText} />
            <button onClick={this.handleReset}>Reset</button>
          </div>
        </header>
      </div>
    )
  }
}

export default App
