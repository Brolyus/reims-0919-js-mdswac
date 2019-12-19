import React from 'react'
import convertToHTML from 'markdown-to-html-converter'
import Output from './components/Output'
import Input from './components/Input.js'
import './App.css'
import Navbar from './components/Navbar.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mdText: '',
      renderedText: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.setState({
        renderedText: convertToHTML(this.state.mdText + '\n')
      })
    }
  }

  handleChange(event) {
    this.setState({ mdText: event.target.value })
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
              handleKeyDown={this.handleKeyDown}
            />
            <Output renderedText={this.state.renderedText} />
          </div>
        </header>
      </div>
    )
  }
}

export default App
