import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../Context/SocketProvider";

const Home = () => {
    const [username, setUsername] = useState("");
    const [game, setGame] = useState("");

    const socket = useSocket();
    const navigate = useNavigate();

    const handleSubmitForm = useCallback(
        (e) => {
            e.preventDefault();
            socket.emit("game:join", { username, game });
            navigate(`/game/${game}`, { state: { username } });
        },
        [username, game, socket]
    );

    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <label htmlFor="game">Game ID</label>
                <input
                    type="text"
                    id="game"
                    value={game}
                    onChange={(e) => setGame(e.target.value)}
                />
                <br />
                <button>Join</button>
            </form>
        </div>
    );
}

export default Home