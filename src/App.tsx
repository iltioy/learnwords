import "./styles/global.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import { useState } from "react";

function App() {
    const [words, setWords] = useState<any>(
        JSON.parse(localStorage.getItem("words")!)
    );

    return (
        <>
            <div className="navbar">as</div>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/edit"
                        element={<Edit words={words} setWords={setWords} />}
                    />
                </Routes>
            </div>
        </>
    );
}

export default App;
