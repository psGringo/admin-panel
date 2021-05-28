import React from "react";
import classes from './MainPage.module.css';
import {Header} from "../Header/Header";
import {Filter} from "../Filter/Filter";
import {Table} from "../Table/Table";
import {TableFooter} from "../TableFooter/TableFooter";

export const MainPage = () => {

    return (
            <div className={classes.mainPage}>
                <Header />
                <Filter />
                <Table />
                <TableFooter />
            </div>
    );
}
