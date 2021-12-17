import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import operateFile from "../logic/operateFile";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  file;

  handleClick = buttonName => {
    if (buttonName === "Upload!"){
      console.log("Handling file")
      operateFile(this.file)
    } else {
      this.props.clickHandler(buttonName);
    }
  };

        // On file select (from the pop up)
        onFileChange = event => {
    
          // Update the state
          this.setState({ selectedFile: event.target.files[0] });
          this.file = event.target.files[0]
        
        };
  
  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name="AC" clickHandler={this.handleClick} />
          <Button name="+/-" clickHandler={this.handleClick} />
          <Button name="%" clickHandler={this.handleClick} />
          <Button name="÷" clickHandler={this.handleClick} orange />
        </div>
        {/* <div>
          <Button name="mod" clickHandler={this.handleClick}  />
          <input type="file" onChange={this.onFileChange} />
                <Button name="Upload!" clickHandler={this.handleClick} orange wide></Button>
        </div> */}
        <div>
          <Button name="mod" clickHandler={this.handleClick} orange wide/>
        </div>
        <div>
          <Button name="sin" clickHandler={this.handleClick} />
          <Button name="cos" clickHandler={this.handleClick} />
          <Button name="log" clickHandler={this.handleClick} orange />
          <Button name="x^y" clickHandler={this.handleClick} orange />

        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="x" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} wide />
          <Button name="." clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} orange />
        </div>
      </div>
    );
  }
}
