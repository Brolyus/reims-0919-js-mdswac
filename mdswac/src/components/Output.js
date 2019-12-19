import React from 'react'
import './Output.css'

const Output = props => {
  return <code className='outputdiv'>{props.renderedText}</code>
}

export default Output
