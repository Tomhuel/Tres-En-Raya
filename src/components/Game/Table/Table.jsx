import React from 'react';
import Cell from '../Cell/Cell';
import './Table.css'

const Table = ({ turn, board, handleBoard }) => {
    return (
        <div className='table'>
            {board.map((cell, index) => (
                <Cell key={index} value={cell} index={index} turn={turn} handleBoard={handleBoard} board={board}></Cell>
            ))}
        </div>
    );
}

export default Table;
