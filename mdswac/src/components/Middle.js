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
      <div>
        <button>Button B</button>
      </div>,
      <div>
        <button>Button C</button>
      </div>,
      <div>
        <button>Button D</button>
      </div>,
      <div>
        <button>Button E</button>
      </div>
  )
}}

export default Middle
