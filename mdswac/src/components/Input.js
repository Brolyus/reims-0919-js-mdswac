import React from 'react'
import './input.css'

class Input extends React.Component {
  constructor(props) {
    super(props)
   }

render () {
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
        ref={this.props.myRef}
        value={this.props.mdText}
        onChange={this.props.handleChange}
        onKeyDown={this.props.handleKeyDown}
      />
      
    </div>
  )
}}

export default Input
