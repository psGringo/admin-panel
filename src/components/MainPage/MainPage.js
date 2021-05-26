import React, {useEffect} from "react";
import './MainPage.css';
import {Header} from "../Header/Header";
import {Filter} from "../Filter/Filter";
import {Table} from "../Table/Table";
import {useDispatch, useSelector} from "react-redux";
import {toggleIsFilterVisible} from "../../actions/filterActions";

export const MainPage = () => {


    return (
        <div className="mainPage">
            <Header/>
            <Filter/>
            <Table/>
        </div>
    );
}
