import React, { Component } from 'react'
import './middle.css'

class Middle extends React.Component {
  constructor(props) {
      super(props)
  }
  
render() {

  return(
    <div className='middlediv'>
      <div>
        <button className="bouton" onClick={<p></p>}>Button A</button>
      </div>
      <div>
        <button className="bouton" onClick={<p></p>}>Button B</button>
      </div>
      <div>
        <button className="bouton" onClick={<p></p>}>Button C</button>
      </div>
      <div>
        <button className="bouton" onClick={<p></p>}>Button D</button>
      </div>
      <div>
        <button className="bouton" onClick={<p></p>}>Button E</button>
      </div>
    </div>  
  )
}}

export default Middle
