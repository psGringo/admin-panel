import './App.css';
import React, {useEffect} from "react";
import {MainPage} from "../MainPage/MainPage";
import {mirageServer} from "../../api/mirageServer";
import {useDispatch} from "react-redux";
import {fetchTableData} from "../../actions/tableDataActions";

function App() {
    mirageServer();
    const dispatch = useDispatch();
    dispatch(fetchTableData())


    return (
        <div className="App">
            <MainPage/>
        </div>
    );
}

export default App;
