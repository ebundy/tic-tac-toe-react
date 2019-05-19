import React from 'react';

export default class Square extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     value: null,
  //     weapon: null,
  //   }
  // }

  render() {
    return (
      <button className="square" onClick={() => {
        //this.setState({ value: this.props.value, weapon: 'love' })
        this.props.onClick()
        // this.state = { value: 'X' }
      }}>
        {this.props.value}
      </button>
    );
  }
}
