import React, { useEffect, useCallback, useState } from "react";
import { useSocket } from "../Context/SocketProvider";
import { useLocation } from "react-router-dom";

const Game = () => {
    const socket = useSocket();
    const [remoteSocketId, setRemoteSocketId] = useState(null);
    const [RemoteUsername, setRemoteUsername] = useState(null);

    const location = useLocation()
    const myUsername = location.state.username;

    const handleUserJoined = useCallback(({ username, id }) => {
        console.log(`${username} joined the room`);
        socket.emit("user:in:game", { to: id });
        setRemoteSocketId(id);
        setRemoteUsername(username);
    }, []);

    const handleUserInGame = useCallback(({ from, username }) => {
        setRemoteSocketId(from);
        setRemoteUsername(username);
    }, []);

    useEffect(() => {
        socket.on("user:joined", handleUserJoined)
        socket.on("user:in:game", handleUserInGame)

        return () => {
            socket.off("user:joined", handleUserJoined)
            socket.off("user:in:game", handleUserInGame)
        }
    }, [socket, handleUserJoined, handleUserInGame])


    return (
        <>
            {remoteSocketId ? (<>
                <div>Game</div>
                <p>My username: {myUsername}</p>
                <p>Opponent Socket ID: {remoteSocketId}</p>
                <p>Opponent Name: {RemoteUsername}</p>
            </>) : (<>
                <p>Waiting for opponent</p>
                <p>My username: {myUsername}</p>
            </>)}
        </>
    )
}

export default Game