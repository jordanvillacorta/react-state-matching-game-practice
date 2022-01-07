import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel';
import Board from '../Board';
import { createTiles, indexOfSelected } from '../../misc/utils';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numTiles: 36,
      playing: false,
      previousTileIndex: null,
      tiles: [],
      toBeCleared: null
    };

    this.startGame = this.startGame.bind(this);
  }

  startGame = ( numTiles ) => {
    this.setState((state) => ({
      playing: true,
      previousTileIndex: null,
      toBeCleared: null,
      tiles: createTiles(state.numTiles)
    }));
  }

  handleTileClicked = ( id, color ) => {
    this.setState((state) => {
      const tiles = state.tiles;
      let toBeCleared = state.toBeCleared;
      const selectedTileIndex = indexOfSelected( tiles, id, color );
      let previousTileIndex = state.previousTileIndex;
    });

    if (previousTileIndex !== null) {
      let previousTile = tiles[previousTileIndex];
      let selectedTile = tiles[selectedTileIndex];
    } else {
      previousTileIndex = selectedTileIndex;
    }

    if (previousTile.id !== selectedTile.id && previousTile.color === color) {
      selectedTile.matched = true;
    }

    return { toBeCleared, tiles, previousTileIndex };
  };

  render() {
  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <OptionsPanel
          playing={this.state.playing}
          numTiles={this.state.numTiles}
          startGame={this.startGame}
        />
        <Board
          numTiles={this.state.numTiles}
          tiles={this.state.tiles}
        />
    </div>
  );

  }
}

export default App;
