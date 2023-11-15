import React, { useState } from 'react';
import Table from './Table/Table';
import './Game.css'

const Game = () => {

    const [game, setGame] = useState(true) // * True if the game is working on. False of already ended
    const [board, setBoard] = useState(Array(9).fill(''));
    const [turn, setTurn] = useState("X");

    const winComps = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const resetGame = () => {
        setBoard(Array(9).fill(''));
        setGame(true);
        setTurn('X');
    }

    const handleBoard = (index, figure) => {
        setBoard((prevBoard) => {
            let newBoard = prevBoard;
            prevBoard[index] = figure;
            handleWin(newBoard);
            return newBoard;
        });
    }

    const handleWin = (newBoard) => {
        const winner = checkWin(newBoard);
        if (winner[0]) {
            setGame(false);
        } else {
            handleTurn();
        }
    }

    const checkWin = () => {
        for (const winComp of winComps) {
            if (board[winComp[0]] === board[winComp[1]] && board[winComp[1]] === board[winComp[2]] && board[winComp[0]] !== '') {
                return [true, board[winComp[0]]];
            }
        }
        return [false];
    }

    const handleTurn = () => {
        if (turn === "X") {
            setTurn("O");
        } else {
            setTurn("X");
        }
    }

    if (board.every(cell => cell !== '') && game) {
        return (
            <>
                <div className='statusMessageContainer'>
                    <span className='statusMessage'>No ha ganado nadie!</span>
                    <span className='restartButton' onClick={resetGame}>Reiniciar</span>
                </div>
            </>
        );
    } else if (game) {
        console.log('EH');
        return (
            <>
                <div className='tablePlace'>
                    <Table turn={turn} handleBoard={handleBoard} board={board} />
                </div>
                <div className='statusMessageContainer'>
                    <span className='statusMessage'>Es el turno de: {turn}</span>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className='statusMessageContainer'>
                    <span className='statusMessage'>Ha ganado {turn}</span>
                    <button className='restartButton' onClick={resetGame}>Reiniciar</button>
                </div>
            </>
        );
    }
}

export default Game;
