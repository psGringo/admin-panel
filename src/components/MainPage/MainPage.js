import React from "react";
import './MainPage.css';
import {Header} from "../Header/Header";
import {Filters} from "../Filters/Filters";
import {Table} from "../Table/Table";

export const MainPage = () => {
    return (
        <div className = "mainPage">
         <Header />
         <Filters />
         <Table />
        </div>
    );
}