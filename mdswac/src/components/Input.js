import React from 'react'
import './input.css'
var MarkdownIt = require('markdown-it'),
  md = new MarkdownIt()

const Input = ({ myRef, mdText, handleChange, insertMyText }) => (
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
    <button onClick={() => insertMyText('# ')}>H1</button>
    <button onClick={() => insertMyText('## ')}>H2</button>
  </div>
)

export default Input
