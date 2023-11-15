import React, { useState } from 'react';
import './Cell.css'

const Cell = ({ turn, handleBoard, index, value }) => {

    const [status, setStatus] = useState(value);

    const handleStatus = () => {
        setStatus(turn);
        handleBoard(index, turn);
    }

    if (status !== '') {
        return (
            <span className='cell'>{status}</span>
        )
    } else {
        return (
            <>
                <span className='cell' onClick={handleStatus}>{status}</span>
            </>
        );
    }
}

export default Cell;
