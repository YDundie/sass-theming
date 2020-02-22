import React, { Component } from 'react';
import '../style/indexScreen.scss';

class IndexScreen extends Component {
  state = {
    isDark: false
  };
  render() {
    return (
      <div className={this.state.isDark ? 'dark' : 'light'}>
        <h1>Hello World!</h1>
        <button className="customButton" onClick={() => this.setState({ isDark: !this.state.isDark })}>
          Click Me!
        </button>
      </div>
    );
  }
}

export default IndexScreen;
