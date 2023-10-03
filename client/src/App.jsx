import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import Game from "./Components/Game"
import Instruction from "./Components/Instruction"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/instruction" element={<Instruction />} />
                <Route path="/game/:gameId" element={<Game />} />
            </Routes>
        </div>
    )
}

export default App
