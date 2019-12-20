import React from 'react'
import './input.css'
var MarkdownIt = require('markdown-it'),
  md = new MarkdownIt()

const Input = ({ myRef, mdText, handleChange, insertMyText, insertMyTextFin }) => (
  <div className='inputdiv'>
    <label className='label' htmlFor='mdText'>
      Saisir votre texte en markdown :
    </label>
    <textarea
      className='area'
      id='mdText'
      placeholder='Saisir votre texte ici'
      type='text'
      ref={myRef}
      value={mdText}
      onChange={handleChange}
    />
    <div className="cssbutton">
      <button onClick={() => insertMyText('# ')}>H1</button>
      <button onClick={() => insertMyText('## ')}>H2</button>
      <button onClick={() => insertMyTextFin('*')}>It</button>
      <button onClick={() => insertMyTextFin('**')}>Bd</button>
    </div>
  </div>
)

export default Input
