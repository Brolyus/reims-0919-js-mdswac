import React from 'react'
import convertToHTML from 'markdown-to-html-converter'
import Output from './components/Output'
import Middle from './components/Middle'
import Input from './components/Input.js'
import './App.css'
import Navbar from './components/Navbar.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mdText: '',
      renderedText: '',
      cutRenderedText:''
    }
    this.handleChange = this.handleChange.bind(this)
    }


  handleChange(event) {
    this.setState({ mdText: event.target.value })
    this.setState({ renderedText: convertToHTML(this.state.mdText + `\n`) })
    this.setState({ cutRenderedText: this.state.renderedText.substring(0,this.state.renderedText.length-5)})
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
            <Middle/>
            <Output cutRenderedText={this.state.cutRenderedText} />
          </div>
        </header>
      </div>
    )
  }
}

export default App
