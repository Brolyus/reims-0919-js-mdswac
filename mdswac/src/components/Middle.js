import React from 'react'
import './middle.css'
import Button from './Button'
import Buttona from './Buttona'
import Buttonb from './Buttonb'

class Middle extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='middlediv'>
        <div>
        <div className="flexButton">
            <div className="portfolio-experiment">
            <a onClick={this.props.handleReset}>
                <span  className="text">St</span>
                <span className="line -right"></span>
                <span className="line -top"></span>
                <span className="line -left"></span>
                <span className="line -bottom"></span>
            </a>
            </div>
        </div>
          <Buttona />
          <Buttonb />
        </div>
      </div>
    )
  }
}

export default Middle
