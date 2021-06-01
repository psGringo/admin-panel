import React from "react";
import classes from './TableFooter.module.css';
import {CountChosenRecords} from "../CountChosenRecords/CountChosenRecords";
import {ButtonChangeStatus} from "../ButtonChangeStatus/ButtonChangeStatus";
import {ButtonDelete} from "../ButtonDelete/ButtonDelete";


export const TableFooter = () => {
    return (
        <div className={classes._} >
            <CountChosenRecords count = "5" />
            <ButtonChangeStatus />
            <ButtonDelete />
            {/*<Paginator*/}
            {/*    activePage={15}*/}
            {/*    itemsCountPerPage={10}*/}
            {/*    totalItemsCount={450}*/}
            {/*    pageRangeDisplayed={5}*/}
            {/*    // onChange={::this.handlePageChange}*/}
            {/*/>*/}

        </div>
    );
}
