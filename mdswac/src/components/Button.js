import React from 'react'
import './button.css'

function Button(props) {
  return (
    <div className='flexButton'>
      <div className='portfolio-experiment'>
        <a>
          <span className='text'>Delete></span>
          <span className='line -right'></span>
          <span className='line -top'></span>
          <span className='line -left'></span>
          <span className='line -bottom'></span>
        </a>
      </div>
    </div>
  )
}

export default Button
