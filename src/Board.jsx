import React from 'react';
import Square from './Square.jsx'

export default class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
    }
  }

  renderSquare(i) {
    return (<Square value={this.state.squares[i]}
      onClick={() => this.handleClickOnSquare(i)}
    />)
  }

  handleClickOnSquare(index) {
    //const currentValue = this.setState(squares[index
    const squaresCopy = this.state.squares.slice()
    squaresCopy[index] = 'X'
    console.log(squaresCopy)
    this.setState({ squares: squaresCopy })
  }

  render() {
    const status = 'Next player: X'

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

