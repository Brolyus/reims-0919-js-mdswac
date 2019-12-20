import React from 'react'
import './middle.css'
import Button from './Button'


class Middle extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='middlediv'>
        <div>
          <Button
            onClick={this.props}
            insertMyText={this.props.insertMyText}
            myRef={this.props.myRef}
            updateState={this.updateState}/>
          

          <div className='flexButton'>
            <div className='portfolio-experiment'>
              <a onClick={this.props.handleReset}>
                <span className='text'>St</span>
                <span className='line -right'></span>
                <span className='line -top'></span>
                <span className='line -left'></span>
                <span className='line -bottom'></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Middle
