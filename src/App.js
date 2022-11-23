import React, { createRef, PureComponent } from 'react';
import './style.css';

class App extends PureComponent {
  paragraphElement = createRef();

  render() {
    console.log(this.textInput);
    return (
      <div>
        <p ref={this.paragraphElement}>Hello</p>
        <button onClick={this.addChar}>Dodaj !</button>
      </div>
    );
  }

  addChar = () => (this.paragraphElement.current.textContent += '!');
}

export default App;
