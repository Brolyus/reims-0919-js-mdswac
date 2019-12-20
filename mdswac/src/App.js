import React from 'react'
import Output from './components/Output'
import Middle from './components/Middle'
import Input from './components/Input'
import './App.css'
import CounterBar from './components/CounterBar'
import Navbar from './components/Navbar'

let MarkdownIt = require('markdown-it'),
  md = require('markdown-it')('commonmark')

class App extends React.Component {
  constructor(props) {
    super(props)

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
            <Middle />
            <Output renderedText={this.state.renderedText} />
          </div>
          <CounterBar mdText={this.state.mdText} />
        </header>
      </div>
    )
  }
}

export default App
