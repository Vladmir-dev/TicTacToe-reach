import React, {useState} from "react";

import Board from "./Board";

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [setpNumber, setStepNumber] = useState(0)
    const [xIsNext, setXisNext] = useState(true)

    const calculateWinner = (squares) =>{
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
    
        for(let i=0; i < lines.length; i++ ){
            const [a,b,c] = lines[i]
            if (squares[a] && squares[a] === squares[b] &&  squares[a] === squares[c]){
                return squares[a];
            }
            else if(!squares.includes(null)){
                return 'draw';
            }
        }
        return null;
    }

    const winner = calculateWinner(history[setpNumber])


    const handleClick = (i) => {
        const timeInHistory = history.slice(0, setpNumber+1)
        const current = timeInHistory[setpNumber];
        const squares = [...current]
        //if user clicks on an occupied square or game is won return
        if(winner || squares[i]) return
        //Put an X or O in clicked square
        squares[i] = xIsNext ? 'X' : 'O'
        setHistory([...timeInHistory, squares])
        setStepNumber(timeInHistory.length);
        setXisNext(!xIsNext)
    }

    const jumpTo = (step) => {
        setStepNumber(step)
        setXisNext(step % 2 === 0)
    }

    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? `Go to move ${move}` : 'Go to start'
            return (
                <li key={move}>
                    <button className="bg-red-600 mt-5 w-auto p-2" onClick={() => jumpTo(move) }>{destination}</button>
                </li>
                
            )
        })
         
    )

    let status;
    if(winner && winner !== 'draw'){
        status = 'Winner: ' + winner;
    } else if (winner && winner === 'draw'){
        status = "It's a " + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

  return (
    <div className="mt-20">
      <Board squares={history[setpNumber]} onClick={handleClick}/>
      <div className="w-[200px] my-[20px] mx-auto">
            <p className="w-auto p-2 bg-yellow-400 text-center rounded-lg text-[20px]">{status}</p>
            {renderMoves()}
      </div>
    </div>
  );
};

export default Game;
