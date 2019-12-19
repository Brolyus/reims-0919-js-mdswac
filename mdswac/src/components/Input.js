import React, { Component } from "react";
import './input.css'
import convertToHTML from 'markdown-to-html-converter';


class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { mdText: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ mdText: event.target.value});
  }

  render() {
    let markdownStr = this.state.mdText
    const htmlStr = convertToHTML(markdownStr)
    return (
      <div className='inputdiv'>
        <p>{htmlStr}</p>
        <label className='label' htmlFor="mdText">Saisir votre texte en markdown :</label>
        <textarea className='area'
          id="mdText"
          placeholder="Saisir votre texte ici"
          type="text"
          value={this.state.mdText}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Input;
