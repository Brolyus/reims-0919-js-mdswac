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
          <Button  onClick = { () => this.props.insertMyText('# ')       
           }
      />
              
          <Buttona />
          <Buttonb />
        </div>
      </div>
    )
  }
}

export default Middle
