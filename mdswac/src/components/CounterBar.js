import React from 'react'

const CounterBar = props => {
  return (
    <p> {props.mdText.split(/[.|,|?|!|;|#|*|-|' '|\n|']/g).filter((word) => {
      if (word.length === 0) {
        return false
      } else {
        return true
      }
    }).length} </p>
  )
}

export default CounterBar