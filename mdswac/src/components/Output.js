import React from 'react'
import './Output.css'

const Output = props => {
  console.log(props.renderedText)
  return (
    <code className='outputdiv'>
      {props.renderedText}
      {/*props.renderedText.split('\n').map(line => {
        console.log(line)
        return line
      })*/}
    </code>
  )
}

export default Output
