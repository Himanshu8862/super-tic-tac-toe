import React, { useState, useCallback } from "react";
import { parse as uuidParse, v4 as uuidV4 } from "uuid"
import { useNavigate } from "react-router-dom";
import { useSocket } from "../Context/SocketProvider";
import "./Home.css"

const Home = () => {
    const [username, setUsername] = useState("");
    const [game, setGame] = useState("");

    const socket = useSocket();
    const navigate = useNavigate();

    const createGameId = () => {
        setGame(uuidV4())
    }

    const handleSubmitForm = useCallback((e) => {
        e.preventDefault();
        try {
            socket.emit("game:join", { username, game });
            game && uuidParse(game) && username && navigate(`/game/${game}`, { state: { username } });
        } catch {
            alert("Invalid Game ID");
        }
    },
        [username, game, socket]
    );

    return (
        <div className="joinBoxWrapper">
            <h1>Super Tic Tac Toe</h1>
            <p>A stategic boardgame for 2 players</p>
            <img
                src="https://s3.amazonaws.com/hr-assets/0/1526565329-5f681d4019-uttt.png"
                alt="gameboard"
            />
            <p className="instructions"><a
                href="/instruction"
                style={{ textDecoration: "underline", cursor: "pointer", color: "black" }}
            >
                Instructions</a>
            </p>
            <form onSubmit={handleSubmitForm} className="joinBox">
                <p className="para">Paste your game ID down below</p>
                <div className="joinBoxInputWrapper">
                    <input
                        className="joinBoxInput"
                        id="gameIdInput"
                        type="text"
                        placeholder="Enter Game ID"
                        required
                        value={game}
                        onChange={(e) => setGame(e.target.value)}
                        autoSave="off"
                        autoComplete="off"
                    />
                </div>
                <div className="joinBoxInputWrapper">
                    <input
                        className="joinBoxInput"
                        id="usernameInput"
                        type="text"
                        placeholder="Enter your name"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoSave="off"
                        autoComplete="off"
                    />
                </div>

                <button className="joinBoxBtn" type="submit">Start Game</button>
                <p className='para'>Don't have Game ID? &nbsp;
                    <span
                        style={{ textDecoration: "underline", cursor: "pointer" }}
                        onClick={createGameId}
                    >Create new Game</span>
                </p>
            </form>
        </div>
    );
}

export default Home