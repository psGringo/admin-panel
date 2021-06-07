import React from "react";
import classes from './MainPage.module.css';
import {Header} from "../Header/Header";
import {Filter} from "../Filter/Filter";
import {Table} from "../Table/Table";
import {TableFooter} from "../TableFooter/TableFooter";
import {ModalWindowDelete} from "../ModalWindowDelete/ModalWindowDelete";
import {OrderForm} from "../OrderForm/OrderForm";

export const MainPage = () => {

    return (
            <div className={classes._}>
                <Header />
                <Filter />
                <Table />
                <TableFooter />
                <ModalWindowDelete />
                <OrderForm  />
            </div>
    );
}
