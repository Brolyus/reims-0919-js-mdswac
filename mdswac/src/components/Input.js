import React, { Component } from 'react'
import './input.css'

const Input = props => {
  return (
    <div className='inputdiv'>
      <label className='label' htmlFor='mdText'>
        Saisir votre texte en markdown :
      </label>
      <textarea
        className='area'
        id='mdText'
        placeholder='Saisir votre texte ici'
        type='text'
        value={props.mdText}
        onChange={props.handleChange}
        onKeyDown={props.handleKeyDown}
      />
    </div>
  )
}

export default Input
