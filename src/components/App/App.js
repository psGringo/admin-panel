import './App.css';
import React from "react";
import {MainPage} from "../MainPage/MainPage";
import {mirageServer} from "../../mirageServer";

function App() {
    mirageServer();
    return (
        <div className="App">
            <MainPage />
        </div>
    );
}

export default App;
