import { useState } from "react"
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Game from "./components/Game/Game"
import Footer from "./components/Footer/Footer";

function App() {

    const [turn, setTurn] = useState("X");

    return (
        <div className="main">
            <Navbar/>
            <main>
                <Game></Game>
            </main>
            <Footer/>
        </div>
    )
}

export default App