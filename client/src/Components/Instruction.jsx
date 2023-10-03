import "./Instruction.css"

const Instruction = () => {
    return (
        <>
            <div className='header-container'>
                <h1>Super Tic Tac Toe</h1>
                <h2>How to play</h2>
                <p>Like the original Tic-Tac-Toe, Player 1 is represented by 'X' in color <span style={{ color: "red" }}>red</span> and Player 2 is represented by 'O' in color <span style={{ color: "blue" }}>blue</span>.</p>
                <p>To start the game, Player 1 places an 'X' on any one of the 81 empty squares, and then players alternate turns. However, after the initial move, players must play the board in color <span style={{ color: "#fab802" }}>yellow</span> that mirrors the square from the previous player.</p>
                <img src="https://s3.amazonaws.com/hr-assets/0/1526565391-9ccf63e616-ozxCl8.png" alt="player1" />
                <p>For example: If Player 1 places an 'X' in the upper-right square of a board, then Player 2 must play the upper-right board.</p>
                <img src="https://s3.amazonaws.com/hr-assets/0/1526565478-18f99febf4-cY1BEf.png" alt="player2" />
                <p>Continuing the example: If Player 2 places an 'O' on the lower-middle square, then Player 1 must next play the lower-middle board.</p>
                <p>Here are the necessary exceptions:</p>
                <p>If the next move is to a board that is full or has already been won, then that player may choose an <b>open</b>  square on <b>any</b> board, for that turn.</p>
                <p>If a player marks 3 consecutive squares (horizontally, vertically or diagonally) on any given board, he wins that board. The first player to win 3 consecutive boards (horizontally, vertically or diagonally) wins the game.</p>
            </div>
        </>
    )
}

export default Instruction