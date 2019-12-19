import React from "react"

class Middle extends React.Component {
  constructor(props) {
      super(props)
  }
  
render() {

  return(
      <div
      onClick={<p></p>}>
        <button>Button A</button>
      </div>,
      <div
      onClick={<p></p>}>>
        <button>Button B</button>
      </div>,
      <div
      onClick={<p></p>}>>
        <button>Button C</button>
      </div>,
      <div
      onClick={<p></p>}>>
        <button>Button D</button>
      </div>,
      <div
      onClick={<p></p>}>>
        <button>Button E</button>
      </div>
  )
}}

export default Middle
