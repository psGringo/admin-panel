import React from "react";
import classes from './MainPage.module.css';
import {Header} from "../Header/Header";
import {Filter} from "../Filters/Filter/Filter";
import {Table} from "../Tables/MainTable/Table/Table";
import {TableFooter} from "../Tables/MainTable/TableFooter/TableFooter";
import {ModalFormDelete} from "../Forms/ModalFormDelete/ModalFormDelete";
import {OrderForm} from "../Forms/RightOrderForm/OrderForm/OrderForm";

export const MainPage = () => {

    return (
            <div className={classes._}>
                <Header />
                <Filter />
                <Table />
                <TableFooter />
                <ModalFormDelete />
                <OrderForm  />
            </div>
    );
}
