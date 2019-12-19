import React from 'react'
import './Output.css'

const Output = props => {
  return (
    <code className='outputdiv'>
      <label className='label' htmlFor='mdText'>
        Voici votre texte en html :
      </label>
      <div className='areaoutput'>
        {props.renderedText.split('\n').map(balise => {
          return <p>{balise}</p>
        })}
      </div>
    </code>
  )
}

export default Output
