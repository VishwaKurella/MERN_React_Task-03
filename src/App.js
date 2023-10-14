import React, { Component } from 'react';
import './App.css';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedColor: null,
      isColorListVisible: false,
    };
  }

  toggleColorList = () => {
    this.setState((prevState) => ({
      isColorListVisible: !prevState.isColorListVisible,
    }));
  }

  selectColor = (color) => {
    this.setState({
      selectedColor: color,
      isColorListVisible: false,
    });
    document.body.style.backgroundColor = color; // Change the background color
  }

  render() {
    const colors = ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#F012BE", "#01FF70"];
    const { selectedColor, isColorListVisible } = this.state;

    return (
      <div className="color-picker">
        <div className="color-display" style={{ backgroundColor: selectedColor }}></div>
        <button onClick={this.toggleColorList}>
          {isColorListVisible ? "Pick a color" : "Change Color"}
        </button>
        {isColorListVisible && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color"
                style={{ backgroundColor: color }}
                onClick={() => this.selectColor(color)}
              ></div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default ColorPicker;
