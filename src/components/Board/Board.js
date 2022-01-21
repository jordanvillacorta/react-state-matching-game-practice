import React from "react";
import "./Board.css";
import Tile from "../Tile/Tile.js";

const Board = (props) => {
  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  };

  const tileMapping = props.tiles.map((tile) => <Tile {...tile} />);

  return (
    <div className="Board" style={gridConfig}>
      {tileMapping}
    </div>
  );
};

export default Board;
