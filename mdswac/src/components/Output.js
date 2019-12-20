import React from 'react'
import './Output.css'

const fileDownload = require('js-file-download');

const Output = props => {
  const saveAs = () => {
    fileDownload(props.renderedText, 'mdswac.html');
  }
  return (
    <>
    
    <code className='outputdiv'>
      <label className='label' htmlFor='mdText'>
        Voici votre texte en HTML :
      </label>
      <div className='areaoutput'>{props.renderedText}</div>
    <button onClick={saveAs}>save</button>
    </code>
    </>
  )
}

export default Output
