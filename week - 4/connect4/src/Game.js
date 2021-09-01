import React, { Component } from 'react';
import Row from './Row';
import checkAll from './CheckAll';


class Game extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      player1: 1,
      player2: 2,
      currentPlayer: null,
      board: [],
      gameOver: false,
      message: '',
      player1name: this.props.p1name,
      player2name: this.props.p2name
    };
    
    // Bind play function to Game component
    this.play = this.play.bind(this);
  }
  
  // Starts new game
  initBoard() {
    // Create a blank 6x7 board
    let board = [];
    for (let r = 0; r < 6; r++) {
      let row = [];
      for (let c = 0; c < 7; c++) { row.push(null) }
      board.push(row);
    }
    
    this.setState({
      board: board,
      currentPlayer: this.state.player1,
      gameOver: false,
      message: ''
    });
  }
  
  togglePlayer() {
    if(this.state.currentPlayer === this.state.player1){
      return this.state.player2;
    }
    else{
      return this.state.player1;
    }
  }
  
  play(c) {
    if (!this.state.gameOver) {
      // Place piece on board
      let board = this.state.board;
      for (let r = 5; r >= 0; r--) {
        if (!board[r][c]) {
          board[r][c] = this.state.currentPlayer;
          break;
        }
      }

      // Check status of board
      let result = checkAll(board);
      if (result === this.state.player1) {
        this.setState({ board: board, gameOver: true, message: this.state.player1name + ' (red) wins!' });
      } else if (result === this.state.player2) {
        this.setState({ board: board, gameOver: true, message: this.state.player2name + ' (black) wins!' });
      } else if (result === 'draw') {
        this.setState({ board: board, gameOver: true, message: 'Draw game.' });
      } else {
        this.setState({ board: board, currentPlayer: this.togglePlayer() });
      }
    } 
  }
  

  
  componentWillMount() {
    this.initBoard();
  }
  
  render() {
    return (
      <div>
        <table>
          <thead>
          </thead>
          <tbody>
            {this.state.board.map((row, i) => (<Row key={i} row={row} play={this.play} />))}
          </tbody>
        </table>
        
        <p className="message">{this.state.message}</p>
        <button className="button" onClick={() => {this.initBoard()}}>New Game</button>
      </div>
    );
  }
}


export default Game;