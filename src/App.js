import React, { createRef, PureComponent } from 'react';
import './style.css';

class App extends PureComponent {
  textInput = createRef();
  paragraphElement = createRef();

  render() {
    console.log(this.textInput);
    return (
      <div>
        <input ref={this.textInput} type="text" />
        <input type="number" />
        <p ref={this.paragraphElement}>Hello</p>
        <button onClick={this.focusTextInput}>Ustaw focus na input</button>
        <button 
        onClick={this.addChar}
        >Dodaj !</button>
      </div>
    );
  }

  focusTextInput = () => this.textInput.current.focus();
  addChar = () => this.paragraphElement.current.textContent += '!' ;
}

export default App;
