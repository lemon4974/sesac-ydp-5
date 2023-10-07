import { Component } from 'react';

class Handler_ex extends Component {
  state = {
    msg: 'Hello World!',
  };

  msgChange = () => {
    this.setState({
      msg: 'Goodbye World!',
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
        <button onClick={() => this.msgChange()}>클릭</button>
      </div>
    );
  }
}

export default Handler_ex;
