import React, { Component } from 'react'
import './middle.css'

class Middle extends React.Component {
  constructor(props) {
      super(props)
  }
  
render() {

  return(
    <div className='middlediv'>
      <div
      onClick={<p></p>}>
        <button>Button A</button>
      </div>
      <div
      onClick={<p></p>}>
        <button>Button B</button>
      </div>
      <div
      onClick={<p></p>}>
        <button>Button C</button>
      </div>
      <div
      onClick={<p></p>}>
        <button>Button D</button>
      </div>
      <div
      onClick={<p></p>}>
        <button>Button E</button>
      </div>
    </div>  
  )
}}

export default Middle
