import React from 'react'

const CounterBar = props => {
  // console.log(props.mdText.split(/[.|,|?|!|;|#|*|-|' ']/g))
  return (
    <p> {props.mdText.split(/[.|,|?|!|;|#|*|-|' '|\n|']/g).filter((word) => {
      // console.log(word)
      if (word.length === 0) {
        return false
      } else {
        return true
      }
    }).length} </p>
  )
}

export default CounterBar