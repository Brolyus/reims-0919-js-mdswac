import React from 'react'
import './Output.css'

const Output = props => {
  return (
    <code className='import'>
      {props.renderedText.split('\n').map(balise => {
        return <p>{balise}</p>
      })}
    </code>
  )
}

export default Output
