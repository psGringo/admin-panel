import React from "react";
import './MainPage.css';
import {Header} from "../Header/Header";
import {FilterHeader} from "../FilterHeader/FilterHeader";
import {Table} from "../Table/Table";
import {FilterBody} from "../FilterBody/FilterBody";

export const MainPage = () => {
    return (
        <div className = "mainPage">
         <Header />
         <FilterHeader />
         <FilterBody />
         <Table />
        </div>
    );
}