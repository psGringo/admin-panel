import './App.css';
import React, {useEffect} from "react";
import {MainPage} from "../MainPage/MainPage";
import {mirageServer} from "../../mirageServer";
import {useDispatch} from "react-redux";
import {fetchAllData} from "../../actions/tableDataActions";

function App() {
    mirageServer();
    const dispatch = useDispatch();
    dispatch(fetchAllData())


    return (
        <div className="App">
            <MainPage/>
        </div>
    );
}

export default App;
