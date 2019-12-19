import React from 'react'
import './Output.css'

const Output = props => {
  return (
    <code className='outputdiv'>
      <label className='label' htmlFor='mdText'>
        Voici votre texte en HTML :
      </label>
      <div className='areaoutput'>{props.renderedText}</div>
    </code>
  )
}

export default Output
