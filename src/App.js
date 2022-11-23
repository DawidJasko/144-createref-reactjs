import React, { createRef, PureComponent } from 'react';

import Counter from './Counter';

import './style.css';

class App extends PureComponent {
  state = {
    isCounterVisible: true,
  };
  paragraphElement = createRef();

  render() {
    const counterElement = this.state.isCounterVisible ? <Counter /> : null;

    return (
      <div>
        <p ref={this.paragraphElement}>Hello</p>
        <button onClick={this.addChar}>Dodaj !</button>
        <button onClick={this.toggleVisibilityCounter}>
          Pokaż ukryj Counter
        </button>
        {counterElement}
      </div>
    );
  }

  toggleVisibilityCounter = () =>
    this.setState((prevState) => ({
      isCounterVisible: !prevState.isCounterVisible,
    }));

  addChar = () => (this.paragraphElement.current.textContent += '!');
}

export default App;
