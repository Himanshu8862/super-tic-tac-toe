const { Server } = require("socket.io");

const io = new Server(8000, {
    cors: true,
});

const usernameToSocketIdMap = new Map();
const socketIdToUsernameMap = new Map();

io.on("connection", (socket) => {
    console.log(`Socket Connected`, socket.id);

    socket.on("game:join", ({ username, game }) => {
        usernameToSocketIdMap.set(username, socket.id);
        socketIdToUsernameMap.set(socket.id, username)
        io.to(game).emit("user:joined", { username, id: socket.id });
        socket.join(game);
    })

    socket.on("user:in:game", ({ to }) => {
        io.to(to).emit("user:in:game", { from: socket.id, username: socketIdToUsernameMap.get(socket.id) })
    })
})