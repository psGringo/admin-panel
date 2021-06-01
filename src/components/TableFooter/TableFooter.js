import React from "react";
import classes from './TableFooter.module.css';
import {CountChosenRecords} from "../CountChosenRecords/CountChosenRecords";
import {ButtonChangeStatus} from "../ButtonChangeStatus/ButtonChangeStatus";
import {ButtonDelete} from "../ButtonDelete/ButtonDelete";
import {Paginator} from "../Paginator/Paginator";


export const TableFooter = () => {
    return (
        <div className={classes._} >
            <CountChosenRecords count = "5" />
            <ButtonChangeStatus />
            <ButtonDelete />
            <Paginator totalCountPages = "10" countVisiblePages = {3} />
        </div>
    );
}
