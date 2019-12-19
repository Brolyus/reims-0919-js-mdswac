import React from 'react'
import './counterbar.css'

const CounterBar = props => {
  return (
    <div className = 'countBar'>
      <p> Nombre de mots : {props.mdText.split(/[.|,|?|!|;|#|*|-|' '|\n|']/g).filter((word) => {
        if (word.length === 0) {
          return false
        } else {
          return true
        }
      }).length} </p>
    </div>
  )
}

export default CounterBar